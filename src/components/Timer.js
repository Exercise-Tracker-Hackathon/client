import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(1200);
  const [isRunning, setIsRunning] = useState(false);

  const updateTime = e => {
    let currentTime = e.target.value;
    currentTime = currentTime * 60;
    setTime(currentTime);
  };

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setTime(1200);
    } else {
      setIsRunning(true);
    }
  };

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(
    () => {
      if (time === 0) {
        setIsRunning(false);
      }

      setTime(time - 1);
    },
    isRunning ? 1000 : null
  );

  let minutes = parseInt(time / 60, 10);
  let seconds = parseInt(time % 60, 10);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <>
      <div className="btn-container">
        {isRunning ? null : (
          <label htmlFor="time">
            Start a Timer
            <input
              onChange={updateTime}
              name="time"
              id="time"
              type="number"
              value={time / 60}
            />
          </label>
        )}

        <button onClick={toggleTimer} className="btn btn--blue start">
          {isRunning ? "Stop" : "Start"}
        </button>
        {isRunning ? (
          <span>
            Time Remaining:{" "}
            <span className="current-time">
              {minutes} : {seconds}
            </span>
          </span>
        ) : null}
      </div>
    </>
  );
};

export default Timer;
