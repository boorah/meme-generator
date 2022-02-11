import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";

import { useParentDimensions } from "../hooks/useParentDimensions";

export default function Canvas({ uploadedImage }) {
  const [canvasParent, setCanvasParent] = useState();
  const { height, width } = useParentDimensions(canvasParent);

  if (!uploadedImage) {
    return null;
  }

  return (
    <VStack
      ref={(node) => {
        setCanvasParent(node);
      }}
      width="full"
      height="lg"
    >
      <Stage width={width} height={height}>
        <Layer>
          <KonvaImage image={uploadedImage} height={height} width={width} />
        </Layer>
      </Stage>
    </VStack>
  );
}
