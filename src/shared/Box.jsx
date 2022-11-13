import React from "react";

function Box({
  children,
  bgColor = "teal",
  textColor = "white",
  fontSize = "medium",
}) {
  const boxStyle = {
    backgroundColor: bgColor,
    color: textColor,
    fontSize,
    width: 180,
    height: 180,
    margin: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={boxStyle}>{children}</div>;
}

export default Box;
