import HelloWorld from "./components/HelloWorld";

import { ThemeProvider } from "./context/ThemeContext";
import ContextExample from "./components/ContextExample";

import EffectExample from "./components/EffectExample";
import ImperativeHandle from "./components/ImperativeHandle";
import ReducerExample from "./components/ReducerExample";
import RefExample from "./components/RefExample";
import StateExample from "./components/StateExample";

import CustomHookFetchExample from "./components/CustomHookFetchExample";

function App() {
  return (
    <div>
      <HelloWorld />
      <StateExample />
      <EffectExample />
      <RefExample />
      <ReducerExample />
      <ImperativeHandle />
      <ThemeProvider>
        <ContextExample />
      </ThemeProvider>
      <CustomHookFetchExample />
    </div>
  );
}

export default App;
