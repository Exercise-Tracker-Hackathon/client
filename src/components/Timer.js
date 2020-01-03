import React, { useEffect, useRef, useState } from "react";
import play from "../assets/play.svg";
import stop from "../assets/stop.svg";

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

      setTime(() => time - 1);
    },
    isRunning ? 1000 : null
  );

  let minutes = parseInt(time / 60, 10);
  let seconds = parseInt(time % 60, 10);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <>
      <div className="timer-container">
        {isRunning ? null : (
          <>
            <label htmlFor="time">Start a Timer</label>
            <input
              onChange={updateTime}
              name="time"
              id="time"
              type="number"
              value={time / 60}
              style={{
                width: "70px",
                margin: "0 5px",
                padding: "3px",
                fontSize: "20px",
                textAlign: "center",
                borderRadius: "3px",
                border: "1px solid #9F9F9F"
              }}
            />
          </>
        )}
        {isRunning ? (
          <span style={{ margin: "0 5px" }}>
            Time Remaining{" "}
            <span
              className="current-time"
              style={{
                fontSize: "20px",
                border: "1px solid #9F9F9F",
                padding: "6px",
                borderRadius: "3px"
              }}
            >
              {minutes} : {seconds}
            </span>
          </span>
        ) : null}
        {isRunning ? (
          <img
            src={stop}
            alt="stop button"
            onClick={toggleTimer}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <img
            src={play}
            alt="play button"
            onClick={toggleTimer}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </>
  );
};

export default Timer;
