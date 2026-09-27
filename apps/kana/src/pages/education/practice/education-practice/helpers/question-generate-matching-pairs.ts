import { transliterateByIndex } from "@nihongo/core/shared/helpers/wordsRomanji";

import {
  Maybe,
  PracticeQuestion,
} from "@/pages/education/practice/education-practice/lib/types/questions";
import { Kana, PracticeType } from "@/shared/constants/kana";
import { Word } from "@/shared/data/words";
import { shuffleArray } from "@/shared/helpers/letters";

interface questionGenerateMatchingPairsProps {
  katakanaWords: Word[];
  hiraganaWords: Word[];

  kana: Kana.Hiragana | Kana.Katakana;

  lang: "en" | "ru";

  transliterations: number;
}

const PAIRS_COUNT = 3;

const questionGenerateMatchingPairs = ({
  katakanaWords,
  hiraganaWords,
  kana,
  lang,
  transliterations,
}: questionGenerateMatchingPairsProps): Maybe<PracticeQuestion[PracticeType.MatchingPairs]> => {
  const preferred = kana === Kana.Hiragana ? hiraganaWords : katakanaWords;
  const other = kana === Kana.Hiragana ? katakanaWords : hiraganaWords;
  const otherKana = kana === Kana.Hiragana ? Kana.Katakana : Kana.Hiragana;

  const questionKana = preferred.length >= PAIRS_COUNT ? kana : otherKana;
  const words = preferred.length >= PAIRS_COUNT ? preferred : other;

  if (words.length < PAIRS_COUNT) return null;

  const kanaElements = shuffleArray(words).slice(0, PAIRS_COUNT);

  const wordsPairs = kanaElements.map((item) => ({
    kana: item.kana,
    translate: item?.[lang as "en"],
    transliteration: transliterateByIndex(item.kana, transliterations),
  }));

  return {
    pairs: wordsPairs,
    questionKana,
  };
};

export default questionGenerateMatchingPairs;
