import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useHaptic } from "@nihongo/core/shared/contexts/haptic/haptic-context";
import {
  ILetter,
  dakuonFlatLettersId,
  handakuonFlatLettersId,
  yoonFlatLettersId,
} from "@nihongo/core/shared/data/lettersTable";
import useGetRomaji from "@nihongo/core/shared/lib/i18n/hooks/useKey";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

import AnswerCard from "@/entities/education/practice/answer-card/answer-card";
import { OnSubmit } from "@/pages/education/practice/education-practice/lib/types/questions";
import { useStatisticsContext } from "@/pages/kana/kana-table-list-page/model/hooks";
import { Kana, KanaAlphabet, PracticeType, TEST_DELAY } from "@/shared/constants/kana";
import { useFirstClickHandler } from "@/shared/helpers/firstClickHandler";
import {
  useAnswerCardSize,
  ANSWER_CARDS_GAP,
} from "@/shared/lib/answer-cards/use-answer-card-size";
import Header from "@/shared/ui/practice-header/practice-header";

interface Props {
  question: ILetter;
  answers: ILetter[];
  questionKana: Kana;
  answersKana: Kana;
  currentIndex?: number;
  onCompleted: OnSubmit;
}

const EducationPracticeSelectAnswers = React.memo<Props>(function EducationPracticeSelectAnswers({
  question,
  answers,
  questionKana,
  answersKana,
  currentIndex,
  onCompleted,
}) {
  const { cardSize, onLayout } = useAnswerCardSize();
  const { t } = useTranslation();
  const { getRomaji } = useGetRomaji();
  const { recalculateOnce } = useStatisticsContext();
  const { triggerHaptic } = useHaptic();

  const [answerState, setAnswerState] = useState({
    selected: null as string | null,
    isCorrect: false,
  });

  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    setAnswerState({ selected: null, isCorrect: false });
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [question, currentIndex]);

  const delayCallback = useCallback((ms: number, callback: () => void) => {
    const start = Date.now();
    const check = () => {
      if (Date.now() - start >= ms) callback();
      else frameRef.current = requestAnimationFrame(check);
    };
    frameRef.current = requestAnimationFrame(check);
  }, []);

  const handlePick = useCallback(
    (answer: ILetter) => {
      if (answerState.selected) return;

      triggerHaptic();

      const key = questionKana + answer.id + question.id;
      const isCorrect = answer.id === question.id;

      const typeOfChapter =
        questionKana === Kana.Romaji
          ? answersKana === Kana.Hiragana
            ? KanaAlphabet.Hiragana
            : KanaAlphabet.Katakana
          : questionKana === Kana.Hiragana
            ? KanaAlphabet.Hiragana
            : KanaAlphabet.Katakana;
      recalculateOnce(typeOfChapter, question.id, isCorrect);

      setAnswerState({ selected: key, isCorrect });
      onCompleted({
        isCorrectAnswer: isCorrect,
        userSelect: { type: PracticeType.Testing, value: answer },
      });

      if (isCorrect) {
        delayCallback(TEST_DELAY, () => setAnswerState({ selected: null, isCorrect: false }));
      }
    },
    [
      answerState.selected,
      triggerHaptic,
      questionKana,
      question,
      answersKana,
      recalculateOnce,
      onCompleted,
      delayCallback,
    ],
  );

  // * useFirstClickHandler сам мемоизирован — просто оборачиваем стабильный обработчик.
  const pickAnswer = useFirstClickHandler(handlePick, 300);

  const getTypeById = useCallback(
    (id: string) =>
      yoonFlatLettersId.includes(id)
        ? t("kana.yoon")
        : handakuonFlatLettersId.includes(id)
          ? t("kana.handakuon")
          : dakuonFlatLettersId.includes(id)
            ? t("kana.dakuon")
            : t("kana.basic"),
    [t],
  );

  const styles = useMemo(() => makeStyles(), []);

  const symbolLabel = useMemo(() => {
    if (questionKana === Kana.Hiragana) return question.hi;
    if (questionKana === Kana.Katakana) return question.ka;
    return getRomaji(question);
  }, [questionKana, question, getRomaji]);

  const subTitle = useMemo(() => {
    const kanaText = t(`kana.${questionKana.toLowerCase()}`);
    return `${kanaText} (${getTypeById(question.id)})`;
  }, [questionKana, question.id, getTypeById, t]);

  const getTextByKey = (answersKana: Kana, answer: ILetter) => {
    return answersKana === Kana.Hiragana
      ? answer.hi
      : answersKana === Kana.Katakana
        ? answer.ka
        : getRomaji(answer);
  };

  return (
    <>
      <Header title={symbolLabel} subtitle={subTitle} />
      <View style={styles.container} onLayout={onLayout}>
        <View style={styles.content}>
          <View style={[styles.grid, { width: cardSize * 2 + ANSWER_CARDS_GAP }]}>
            {cardSize > 0 &&
              answers.map((answer) => {
                const key = questionKana + answer.id + question.id;

                return (
                  <AnswerCard
                    key={answer.id}
                    value={answer}
                    width={cardSize}
                    redMarked={answerState.selected === key && !answerState.isCorrect}
                    greenMarked={answerState.selected === key && answerState.isCorrect}
                    onClick={pickAnswer}
                    questionId={question.id}
                  >
                    {getTextByKey(answersKana, answer)}
                  </AnswerCard>
                );
              })}
          </View>
        </View>
      </View>
    </>
  );
});

const makeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      marginTop: ANSWER_CARDS_GAP,
    },
    content: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,

      alignItems: "center",
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: ANSWER_CARDS_GAP,
      justifyContent: "center",
    },
  });

export default EducationPracticeSelectAnswers;
