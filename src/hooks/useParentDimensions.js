import { useMemo } from "react";

export function useParentDimensions(canvasParent) {
  const [height, width] = useMemo(() => {
    if (!canvasParent) {
      return [];
    }

    const boundingRectangle = canvasParent.getBoundingClientRect();

    return [boundingRectangle.height, boundingRectangle.width];
  }, [canvasParent]);

  return {
    height,
    width,
  };
}
