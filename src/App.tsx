import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount((initalCount) => {
      return initalCount + 1;
    });
  };
  return (
    <div className="App">
      <div className="info">
        <div className="progress">Work in Progeress</div>
        <div className="emoji">🙂</div>
      </div>
      <div className="count">{count}</div>
      <button onClick={incr}>Click me</button>
    </div>
  );
}

export default App;
