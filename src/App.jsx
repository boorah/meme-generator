import React from "react";
import { Container, Heading } from "@chakra-ui/react";

import MemeGenerator from "./components/MemeGenerator";

export default function App() {
  return (
    <Container maxW="container.lg" height="full" border="1px">
      <Heading size="lg">Meme Generator</Heading>
      <MemeGenerator />
    </Container>
  );
}
