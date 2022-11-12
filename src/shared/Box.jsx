import React from "react";

function Box({ children, bgColor = "teal" }) {
  const boxStyle = {
    color: "white",
    backgroundColor: bgColor,
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
