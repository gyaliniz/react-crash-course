import React from "react";

function Button({ text, handleClick }) {
  const buttonStyle = {
    margin: "20px 5px",
    padding: "5px 20px",
    borderRadius: "15px",
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
