import React, { useState, useEffect } from "react";
import Container from "../shared/Container";
import Box from "./../shared/Box";

function EffectExample() {
  const [bgColor, setbgColor] = useState("darkred");
  const [text, setText] = useState("Effect Example");

  useEffect(() => {
    setTimeout(() => {
      setbgColor("black");
    }, 2000);
  }, []);
  // []: this is a dependency array
  // no parameter is given, will run when the component mount/unmount
  // if a given parameter is updated, useEffect is triggered in the background

  useEffect(() => {
    if (bgColor !== "darkred") {
      setText("Effected by Dependency");
    }

    // You can also return function when you need to run a method
    // when the component unmounts
    return () => {
      console.log("Cleaning");
    };
  }, [bgColor]);

  return (
    <Container>
      <Box bgColor={bgColor}>{text}</Box>
    </Container>
  );
}

export default EffectExample;
