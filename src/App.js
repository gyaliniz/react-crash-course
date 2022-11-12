import EffectExample from "./components/EffectExample";
import HelloWorld from "./components/HelloWorld";
import ReducerExample from "./components/ReducerExample";
import RefExample from "./components/RefExample";
import StateExample from "./components/StateExample";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <StateExample />
      <EffectExample />
      <RefExample />
      <ReducerExample />
    </div>
  );
}

export default App;
