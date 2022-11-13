import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Box from "../shared/Box";
import Container from "../shared/Container";
import Button from "../shared/Button";

function ContextExample() {
  const { bgColor, textColor, btnPrimary, btnSecondary, fontSize, dispatch } =
    useContext(ThemeContext);

  return (
    <>
      <Container>
        <Box bgColor={bgColor} textColor={textColor} fontSize={fontSize}>
          Context Example
        </Box>
        <Button text="Primary" bgColor={btnPrimary} />
        <Button text="Secondary" bgColor={btnSecondary} />
      </Container>
      <Container>
        <Button
          text="Dark Theme"
          handleClick={() => dispatch({ type: "SET_DARK_THEME" })}
        />
        <Button
          text="Light Theme"
          handleClick={() => dispatch({ type: "SET_LIGHT_THEME" })}
        />
        <Button
          text="Large Font"
          handleClick={() => dispatch({ type: "SET_LARGE_FONT" })}
        />
        <Button
          text="Normal Font"
          handleClick={() => dispatch({ type: "SET_NORMAL_FONT" })}
        />
      </Container>
    </>
  );
}

export default ContextExample;
