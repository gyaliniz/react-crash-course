import React from "react";

function Container({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
