import React from "react";
import Container from "./../shared/Container";
import Box from "./../shared/Box";
import { useRef, useLayoutEffect } from "react";

function RefExample() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    boxRef.current.innerHTML = "Updated via useRef";
  }, []);

  return (
    <Container>
      <Box>
        <p ref={boxRef}> UseRef Example </p>
      </Box>
    </Container>
  );
}

export default RefExample;
