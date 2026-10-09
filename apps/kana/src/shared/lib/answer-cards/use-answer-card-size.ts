import { useCallback, useState } from "react";

import { TABLET_WIDTH } from "@nihongo/core/shared/constants/sizes";
import { LayoutChangeEvent } from "react-native";

export const ANSWER_CARDS_GAP = 16;

const MAX_CARD_SIZE = (TABLET_WIDTH - 50) / 2;

export const useAnswerCardSize = () => {
  const [area, setArea] = useState<{ width: number; height: number } | null>(null);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setArea((prev) =>
      prev?.width === width && prev?.height === height ? prev : { width, height },
    );
  }, []);

  const cardSize = area
    ? Math.max(
        0,
        Math.min(
          (area.width - ANSWER_CARDS_GAP) / 2,
          (area.height - ANSWER_CARDS_GAP) / 2,
          MAX_CARD_SIZE,
        ),
      )
    : 0;

  return { cardSize, onLayout };
};
