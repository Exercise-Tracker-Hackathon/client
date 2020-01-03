import React from "react";
import { Link } from "react-router-dom";
import TimerInput from "./TimerComponents/TimerInput";
import Timer from "./TimerComponents/IntervalTimer";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <h2>Welcome to Pumpodoro!</h2>
      <p>
        Pumpodoro is a desktop app designed to help officer workers get active.
        It is simple to use set your timer then when the time is up Pumpodoro
        will send you and notification to get up, and get active. Log your
        exercise and the reps you have completed. Can you beat your PR?
        Pumpodora keeps track of your best exercises to motivate you to push
        further, and see your progress.
      </p>
      <TimerInput />
      <Timer />
      <Link className="login" to="/login">
        Login
      </Link>
      <Link className="signup" to="/register">
        Sign Up
      </Link>
    </div>
  );
};

export default LandingPage;
