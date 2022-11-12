import React, { useState } from "react";
import Box from "../shared/Box";
import Button from "../shared/Button";
import Container from "../shared/Container";

function StateExample() {
  const [text, setText] = useState("Initial State");

  const handleClick = () => setText(Math.random().toFixed(2));

  return (
    <Container>
      <Box> {text} </Box>
      <Button text="Update State" handleClick={handleClick} />
    </Container>
  );
}

export default StateExample;
