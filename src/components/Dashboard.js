import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddWorkout from "./AddWorkout";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import logo from "../assets/pumpordo-logo.png";
import ExerciseCardList from "./ExerciseCardList";
import plus from "../assets/plus.svg";
import HeatMap from "./HeatMap";

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
    fetchUser();
  }, [submitted, addedSet]);

  const fetchUser = () => {
    const userId = localStorage.getItem("user_id");

    axiosWithAuth()
      .get(`https://pumpodoro.herokuapp.com/api/users/${userId}`)
      .then(res => {
        setExercises(res.data.user.exercises);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px auto 0 auto",
        width: "90%",
        maxWidth: "1600px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}
      >
        <p
          style={{
            color: "#676767",
            padding: "10px 30px",
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif"
          }}
        >
          {exercises.length > 0 ? "Today's exercises" : null}
        </p>
        <Button
          variant="light"
          style={{
            background: "none",
            border: "none",
            padding: "10px 30px",
            alignSelf: "center",
            color: "#9f9f9f",
            display: "flex",
            alignItems: "center"
          }}
          onClick={handleShow}
        >
          <img
            src={plus}
            alt="plus"
            style={{ height: "18px", margin: "0 10px 0 0" }}
          />
          Create an exercise
        </Button>
      </div>

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
          <p
            style={{
              fontSize: "24px",
              fontFamily: "Actor, sans-serif",
              color: "#9f9f9f"
            }}
          >
            You don’t have any exercises yet. <br /> Create an exercise to get
            started.
          </p>
          <img src={logo} alt="logo" style={{ opacity: 0.5 }} />
        </div>
      )}
      {exercises.length > 0 && (
        <div
          style={{
            width: "100%",
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ width: "95%" }}>
            <ExerciseCardList
              exercises={exercises}
              addSet={addSet}
              fetchUser={fetchUser}
            />
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              width: "100%"
            }}
          >
            <HeatMap exercises={exercises} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
