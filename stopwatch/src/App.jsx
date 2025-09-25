import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0); // time in seconds
  const intervalRef = useRef(null);

  // Start the stopwatch
  const start = () => {
    if (intervalRef.current !== null) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  // Stop the stopwatch
  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Reset the stopwatch
  const reset = () => {
    stop();
    setTime(0);
  };

  // Format time as HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
