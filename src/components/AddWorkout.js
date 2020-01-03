import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddWorkout = ({ handleClose, addExercise }) => {
  const [exercise, setExercise] = React.useState({
    type: "",
    reps: 0
  });

  const handleChange = e => {
    setExercise({
      ...exercise,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let { reps } = exercise;
    reps = parseInt(reps);
    axiosWithAuth().post("https://pumpodoro.herokuapp.com/api/exercises", {
      ...exercise,
      user_id: localStorage.getItem("user_id")
    });
    addExercise();
    handleClose();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formExerciseName">
          <Form.Label>Exercise</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="type"
            type="text"
            value={exercise.name}
            placeholder="Push Ups"
          />
        </Form.Group>

        <Form.Group controlId="formExerciseReps">
          <Form.Label>Reps (please enter a number)</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="reps"
            type="number"
            placeholder="20"
            value={exercise.reps}
          />
        </Form.Group>
        <p>
          Create an exercise with a goal of reps you want to complete. This will
          create a new exercise on your dashboard where you can record the
          number of sets you’ve completed.
        </p>
        <Button style={{ background: "#EC6033", border: "none" }} type="submit">
          Save
        </Button>
        <Button
          style={{
            background: "none",
            border: "1px solid #EC6033",
            color: "#EC6033"
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default AddWorkout;
