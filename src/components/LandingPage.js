import React from "react";
import { Button } from "react-bootstrap";
import titleImg from "../assets/pumpordo-logo.png";
import heart from "../assets/heartbeat.svg";
import brain from "../assets/brain.svg";
import productivity from "../assets/profits.svg";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Section 1 */}
      <div className="main-hero">
        <img src={titleImg} alt="pumpodoro logo" />
        <h2
          style={{
            color: "#A33A18",
            fontSize: "48px",
            textAlign: "center",
            fontFamily: "Actor, sans-serif"
          }}
        >
          Pumpodoro combines <br /> activity with productivity
        </h2>
        <Button
          style={{ background: "#EC6033", border: "none", padding: "8px 38px" }}
          href="/register"
          className="button"
        >
          Get Started
        </Button>
      </div>

      {/* Section 2 */}
      <h2 className="main-heading">What is pumpodoro?</h2>
      <div className="about-section">
        <div className="content">
          <p style={{ marginBottom: "50px" }}>
            Pumpodoro uses the popular Pomodoro technique to help you create
            great habits.
          </p>
          <p style={{ marginBottom: "50px" }}>
            Pumpodoro encourages you to step away from your desk and get active.
          </p>
          <p>
            Research suggests that 5-10 minutes a day of high intensity exercise
            can provide the same health benefits as 45 minutes of a moderate
            workout.
          </p>
        </div>
        <div className="image-ctr">
          <img src={man} alt="man lifting weights" className="man" />
          <img src={woman} alt="woman lifting weights" className="woman" />
        </div>
      </div>
      {/* Section 3 */}
      <h2 className="sub-heading">A few benefits</h2>
      <p className="subtitle">
        Here are just a few reasons to add pumpodoro to your daily routine.
      </p>

      <div className="benefits">
        <section>
          <img src={heart} alt="heart" className="heart" />
          <p>
            High intensity exercise for 5-10 minutes can provide the same
            cardiovascular benefit as 45 minutes of moderate exercise.
          </p>
        </section>
        <section>
          <img src={brain} alt="brain" className="brain" />
          <p>
            High intensity interval workouts help improve focus and cognitive
            abilities.
          </p>
        </section>
        <section>
          <img src={productivity} alt="chart" className="productivity" />
          <p>
            Regular exercise improves productivity by things I haven’t really
            researched well enough to say yet.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
