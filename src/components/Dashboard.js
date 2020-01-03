import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddWorkout from "./AddWorkout";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import logo from "../assets/pumpordo-logo.png";
import ExerciseCardList from "./ExerciseCardList";
// import HeatMap from "./HeatMap";

const Dashboard = () => {
  const [exercises, setExercises] = useState([]);
  const [addedSet, setAddedSet] = useState(false);
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addExercise = () => setSubmitted(!submitted);
  const addSet = () => setAddedSet(!addedSet);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    axiosWithAuth()
      .get(`https://pumpodoro.herokuapp.com/api/users/${userId}`)
      .then(res => {
        setExercises(res.data.user.exercises);
      })
      .catch(err => {
        console.error(err);
      });
  }, [submitted, addedSet]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <Button
        style={{
          background: "#EC6033",
          border: "none",
          padding: "10px 30px",
          margin: "30px"
        }}
        onClick={handleShow}
      >
        Add Exercise
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ border: "none" }}>
          {/* <Modal.Title>Create an exercise for today</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <AddWorkout addExercise={addExercise} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
      {exercises.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "100px 0 0 0"
          }}
        >
          <p style={{ fontSize: "24px", fontFamily: "Actor, sans-serif" }}>
            You don’t have any exercises yet. <br /> Create an exercise to get
            started.
          </p>
          <img src={logo} alt="logo" style={{ opacity: 0.5 }} />
        </div>
      )}
      {exercises.length > 0 && (
        <div>
          <ExerciseCardList exercises={exercises} addSet={addSet} />
          {/* <HeatMap exercises={exercises} /> */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
