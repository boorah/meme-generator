import React, { useState, useCallback } from "react";
import { VStack, Button, Input } from "@chakra-ui/react";

import Canvas from "../components/Canvas";

export default function MemeGenerator() {
  const [uploadedImage, setUploadedImage] = useState();

  return (
    <VStack justifyContent="center" height="full">
      {uploadedImage ? (
        <Editor uploadedImage={uploadedImage} />
      ) : (
        <ImageUploadButton setUploadedImage={setUploadedImage} />
      )}
    </VStack>
  );
}

function ImageUploadButton({ setUploadedImage }) {
  const fileUploadHandler = useCallback(
    (event) => {
      if (event) {
        const { files } = event?.target;
        const uploadedImage = files[0];

        const fileReader = new FileReader();
        fileReader.onload = (fileReadEvent) => {
          const base64EncodedImage = fileReadEvent.target.result;

          // Update the uploadedImage state
          const imageInstance = new window.Image();
          imageInstance.src = base64EncodedImage;
          setUploadedImage(imageInstance);
        };

        fileReader.readAsDataURL(uploadedImage);
      }
    },
    [setUploadedImage]
  );

  return (
    <>
      <Button as="label" htmlFor="image-upload">
        Upload Image / Template
      </Button>
      <Input
        visibility="hidden"
        id="image-upload"
        type="file"
        onChange={fileUploadHandler}
      />
    </>
  );
}

function Editor({ uploadedImage }) {
  return (
    <VStack width="full" height="full">
      <Canvas uploadedImage={uploadedImage} />
    </VStack>
  );
}
