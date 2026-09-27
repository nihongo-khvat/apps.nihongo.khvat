import { Word } from "@/shared/data/words";

export const getRandomWords = (excludedWords: string[], allWords: Word[]): Word | undefined => {
  const availableWords = allWords.filter((word) => !excludedWords.includes(word.kana));

  const randomIndex = Math.floor(Math.random() * availableWords.length);
  return availableWords[randomIndex];
};

export const mergeWordsByKana = (list: Word[]): Word[] => {
  const join = (a: string, b: string) => (a.split(", ").includes(b) ? a : `${a}, ${b}`);
  const byKana = new Map<string, Word>();

  for (const word of list) {
    const prev = byKana.get(word.kana);
    byKana.set(
      word.kana,
      prev ? { kana: word.kana, en: join(prev.en, word.en), ru: join(prev.ru, word.ru) } : word,
    );
  }

  return [...byKana.values()];
};
