import React, { useRef, useImperativeHandle } from "react";
import Container from "../shared/Container";
import Button from "../shared/Button";

function ImperativeHandle() {
  const inputRef = useRef(null);

  const handleClick = () => inputRef.current.focusThenBlur();
  return (
    <Container>
      <InnerComponent forwardedRef={inputRef} />
      <Button text="Focus" handleClick={handleClick} />
    </Container>
  );
}

const InnerComponent = ({ forwardedRef }) => {
  const localRef = useRef(null);

  useImperativeHandle(forwardedRef, () => {
    return {
      focusThenBlur: () => {
        localRef.current.focus();
        setTimeout(() => {
          localRef.current.blur();
        }, 2000);
      },
    };
  });

  return <input type="text" ref={localRef} />;
};

export default ImperativeHandle;
