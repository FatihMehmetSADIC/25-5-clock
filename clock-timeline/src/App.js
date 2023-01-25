import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>25+5 Clock</h1>

      <h2>Break Session Length</h2>
      <button id="break-minus-element">- </button>
      <span id="break-session-element">5</span>
      <button id="break-plus-element">+</button>

      <h2>Session Length</h2>
      <button id="session-minus-element">-</button>
      <span id="session-element">25</span>
      <button id="">+</button>

      <h2>Session</h2>
      <h2>25</h2>

      <button>Play</button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
