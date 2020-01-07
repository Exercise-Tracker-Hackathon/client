import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddWorkout = ({ handleClose, addExercise }) => {
  const [exercise, setExercise] = React.useState({
    type: "",
    reps: ""
  });

  const handleChange = e => {
    setExercise({
      ...exercise,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (exercise.type === "" || exercise.reps === "") return;
    axiosWithAuth()
      .post("https://pumpodoro.herokuapp.com/api/exercises", {
        ...exercise,
        user_id: localStorage.getItem("user_id")
      })
      .then(() => {
        addExercise();
        handleClose();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ padding: "0 20px 20px 20px" }}>
        <Form.Group controlId="formExerciseName">
          <Form.Label style={{ fontWeight: "bold" }}>Exercise</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="type"
            type="text"
            value={exercise.name}
            placeholder="Push Ups"
            required
          />
        </Form.Group>

        <Form.Group controlId="formExerciseReps">
          <Form.Label style={{ fontWeight: "bold" }}>
            Reps (please enter a number)
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            name="reps"
            type="number"
            placeholder="5"
            value={exercise.reps}
            min="1"
            required
            style={{ width: "65px", textAlign: "start" }}
          />
        </Form.Group>
        <p
          style={{
            border: "1px solid #C4C4C4",
            padding: "8px",
            margin: "50px 0 20px 0",
            color: "#000",
            fontWeight: "600"
          }}
        >
          Create an exercise with a goal of reps you want to complete. This will
          create a new exercise on your dashboard where you can record the
          number of sets you’ve completed.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            style={{ background: "#EC6033", border: "none", width: "48%" }}
            type="submit"
          >
            Save
          </Button>
          <Button
            style={{
              background: "none",
              border: "1px solid #EC6033",
              color: "#EC6033",
              width: "48%"
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddWorkout;
