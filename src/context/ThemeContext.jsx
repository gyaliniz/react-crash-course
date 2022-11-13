import React, { createContext, useReducer } from "react";

// Step 1: Create Context
const ThemeContext = createContext();

const initialState = {
  bgColor: "gray",
  textColor: "black",
  btnPrimary: "gray",
  btnSecondary: "darkgreen",
  fontSize: "normal",
};

// step 2: export ThemeProvider, you wrap consumer with provider
// so they can use the values provided by it
export const ThemeProvider = ({ children }) => {
  // step 3: use reducer with initial state
  // to provide the current state and dispatch funtion to the consumers
  const [state, dispatch] = useReducer(reducer, initialState);

  // step 4: use Provider to serve values to the consumers
  return (
    <ThemeContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_DARK_THEME":
      return {
        ...state,
        bgColor: "black",
        textColor: "white",
        btnPrimary: "teal",
        btnSecondary: "violet",
      };
    case "SET_LIGHT_THEME":
      return {
        ...state,
        ...initialState,
      };
    case "SET_LARGE_FONT":
      return {
        ...state,
        fontSize: "large",
      };
    case "SET_NORMAL_FONT":
      return {
        ...state,
        fontSize: "medium",
      };
    default:
      return {
        ...state,
      };
  }
}

export default ThemeContext;
