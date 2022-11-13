import React from "react";

function Button({ text, handleClick, bgColor = "lightgray" }) {
  const buttonStyle = {
    backgroundColor: bgColor,
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
