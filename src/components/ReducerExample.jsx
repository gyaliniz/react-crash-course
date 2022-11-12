import React from "react";
import { useState, useReducer } from "react";
import Container from "../shared/Container";
import Button from "../shared/Button";

function ReducerExample() {
  // initial state parameter for this component
  const initialState = { messageItems: [] };

  // use reducer hook
  // takes reducer function which has state updating options, and initial state as parameters
  const [{ messageItems }, dispatch] = useReducer(reducer, initialState);
  // and returns the state object with dispatch function
  // you can not call the reducer function directly to update the state
  // you have to use the dispatch function that useReducer just returned.

  // dispatch function usually takes an argument object with two params
  // type: state name
  // payload: param to update the state

  const [customText, setCustomText] = useState("");

  return (
    <>
      <p>
        {messageItems.length > 0
          ? messageItems.map((item, index) => <span key={index}> {item} </span>)
          : "Reducer Example - Click the buttons below to update the state"}
      </p>
      <Container>
        <Button text="Add A" handleClick={() => dispatch({ type: "ADD_A" })} />
        <Button text="Add B" handleClick={() => dispatch({ type: "ADD_B" })} />
        <Button text="POP  " handleClick={() => dispatch({ type: "POP" })} />
        <Button
          text="ADD CUSTOM TEXT"
          handleClick={() =>
            dispatch({ type: "ADD_CUSTOM_TEXT", payload: { customText } })
          }
        />
        <input type="text" onChange={(e) => setCustomText(e.target.value)} />
      </Container>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_A":
      return {
        ...state,
        messageItems: [...state.messageItems, "A"],
      };
    case "ADD_B":
      return {
        ...state,
        messageItems: [...state.messageItems, "B"],
      };
    case "POP":
      const temp = [...state.messageItems];
      temp.pop();
      return {
        ...state,
        messageItems: temp,
      };
    case "ADD_CUSTOM_TEXT":
      return {
        ...state,
        messageItems: [...state.messageItems, ...action.payload.customText],
      };
    default:
      return {
        ...state,
      };
  }
}

export default ReducerExample;
