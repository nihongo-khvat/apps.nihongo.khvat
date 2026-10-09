import { transliterateByIndex } from "@nihongo/core/shared/helpers/wordsRomanji";

import {
  Maybe,
  PracticeQuestion,
} from "@/pages/education/practice/education-practice/lib/types/questions";
import { Kana, KanaAlphabet, PracticeType } from "@/shared/constants/kana";
import { Word } from "@/shared/data/words";
import { shuffleArray } from "@/shared/helpers/letters";
import { getRandomWords } from "@/shared/helpers/words";

interface GenerateChoiceAnswerProps {
  addedKanaWords: string[];

  katakanaWords: Word[];
  hiraganaWords: Word[];

  kana: KanaAlphabet;

  transliterations: number;
}

const WRONG_ANSWERS_COUNT = 3;

const questionGenerateMultipleChoice = ({
  addedKanaWords,
  katakanaWords,
  hiraganaWords,
  kana,
  transliterations,
}: GenerateChoiceAnswerProps): Maybe<PracticeQuestion[PracticeType.MultipleChoice]> => {
  const words = kana === KanaAlphabet.Hiragana ? hiraganaWords : katakanaWords;

  const word = getRandomWords(addedKanaWords, words);
  if (!word) return null;

  const toTitle = (item: Word) => transliterateByIndex(item.kana, transliterations);

  const correctTitle = toTitle(word);

  const wrongTitles = new Set<string>();
  for (const item of shuffleArray([...hiraganaWords, ...katakanaWords])) {
    const title = toTitle(item);
    if (title !== correctTitle) wrongTitles.add(title);
    if (wrongTitles.size === WRONG_ANSWERS_COUNT) break;
  }

  if (wrongTitles.size < WRONG_ANSWERS_COUNT) return null;

  return {
    word,
    kana: kana === KanaAlphabet.Hiragana ? Kana.Hiragana : Kana.Katakana,
    answers: shuffleArray([
      { title: correctTitle, isTrue: true },
      ...[...wrongTitles].map((title) => ({ title, isTrue: false })),
    ]),
  };
};

export default questionGenerateMultipleChoice;
