import EffectExample from "./components/EffectExample";
import HelloWorld from "./components/HelloWorld";
import RefExample from "./components/RefExample";
import StateExample from "./components/StateExample";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <StateExample />
      <EffectExample />
      <RefExample />
    </div>
  );
}

export default App;
