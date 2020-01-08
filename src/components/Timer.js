import React, { useEffect, useRef, useState } from "react";
import play from "../assets/play.svg";
import stop from "../assets/stop.svg";
import notification from "../assets/alarm.mp3";

const Timer = () => {
  const [time, setTime] = useState(1200);
  const [isRunning, setIsRunning] = useState(false);
  const [alarm, setAlarm] = useState(false);

  const updateTime = e => {
    //requires the timer to be at least 1 minute
    if (e.target.value <= 0) return;
    let currentTime = e.target.value;
    currentTime = currentTime * 60;
    setTime(currentTime);
  };

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setTime(1200);
      setAlarm(false);
    } else {
      setIsRunning(true);
    }
  };

  const audio = useRef();

  const alert = () => {
    if (audio.current !== null && alarm === true) {
      return <audio autoPlay ref={audio} src={notification} type="audio" />;
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
        setTime(1200);
        setAlarm(true);
      } else {
        setTime(() => time - 1);
      }
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
            <label
              htmlFor="time"
              style={{
                color: "#CECECE",
                whiteSpace: "nowrap"
              }}
            >
              Start a Timer
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <input
                onChange={updateTime}
                name="time"
                id="time"
                type="number"
                value={time / 60}
                style={{
                  width: "70px",
                  margin: "0 5px",
                  padding: "0px",
                  fontSize: "20px",
                  textAlign: "center",
                  borderRadius: "3px",
                  border: "none"
                }}
              />
              <img
                src={play}
                alt="play button"
                onClick={toggleTimer}
                style={{ cursor: "pointer", height: "30px" }}
              />
            </div>
          </>
        )}
        {isRunning ? (
          <>
            <label style={{ color: "#CECECE", whiteSpace: "nowrap" }}>
              Time Remaining
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span
                className="current-time"
                style={{
                  fontSize: "20px",
                  border: "1px solid #9F9F9F",
                  margin: "0 5px",
                  borderRadius: "3px",
                  width: "70px",
                  textAlign: "center",
                  background: "#fff"
                }}
              >
                {minutes} : {seconds}
              </span>
              <img
                src={stop}
                alt="stop button"
                onClick={toggleTimer}
                style={{ cursor: "pointer", height: "30px" }}
              />
            </div>
          </>
        ) : null}
        {/* {isRunning ? (
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
        )} */}
      </div>
      <>{alarm ? alert() : null}</>
    </>
  );
};

export default Timer;
