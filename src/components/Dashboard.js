import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddWorkout from "./AddWorkout";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import logo from "../assets/pumpordo-logo.png";
import ExerciseCardList from "./ExerciseCardList";

const Dashboard = () => {
  const [exercises, setExercises] = useState([]);
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [addedSet, setAddedSet] = useState(false);

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
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add An Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddWorkout addExercise={addExercise} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
      {exercises.length === 0 && (
        <p>
          You don’t have any workouts yet. <br /> Create a workout to get
          started.
        </p>
      )}
      {exercises.length > 0 && (
        <ExerciseCardList exercises={exercises} addSet={addSet} />
      )}

      <Button variant="primary" onClick={handleShow}>
        Add Exercise Routine
      </Button>
      <img src={logo} alt="logo" style={{ opacity: 0.5 }} />
    </div>
  );
};

export default Dashboard;
