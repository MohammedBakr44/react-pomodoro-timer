import { useState, useLayoutEffect, useCallback, useEffect, useRef } from "react";

function Counter() {
  /*
    TODO add a button to toggle the counter
    TODO add break functionality
   */
  const [timer, setTimer] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [pomodoros, setPomodoros] = useState(0);
  const [running, setRunning] = useState(false);
  const buttonRef = useRef(null);
  const counter = (timer, seconds) => {
    setTimeout(() => {
      if (seconds === 0) {
        setSeconds(59);
        setTimer(+timer - 1);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  };
  const reset = () => {
    setTimer(1);
    setSeconds(0);
    setPomodoros(pomodoros + 1);
    console.log(`${pomodoros} pomodoros done`);
  };

  useLayoutEffect(() => {
    buttonRef.current.addEventListener('click', () => {
      counter(timer, seconds);
    })
    if (running) {
      timer === 0 && seconds === 1 ? reset() : counter(timer, seconds);
    }
  }, [timer, seconds]);
  const handleTimeChange = e => {
    setTimer(+e.target.value);
    setSeconds(59);
  }
  return (
    <div className="counter">
      <input className="timeInput" type="text" value={timer} onChange={handleTimeChange} />
      <button className="playButton" ref={buttonRef} onClick={() => setRunning(!running)}>{running ? "" : "▶"}</button>
      <h1>
        {timer < 10 ? "0" + timer : timer}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
      <h3>Pomodoros counter: {pomodoros < 10 ? "0" + pomodoros : pomodoros}</h3>
    </div>
  );
}

export default Counter;
