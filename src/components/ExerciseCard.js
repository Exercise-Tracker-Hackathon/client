import React from "react";
import Card from "react-bootstrap/Card";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import repsButton from "../assets/button.svg";

const ExerciseCard = ({ exercise, addSet }) => {
  const handleClick = () => {
    axiosWithAuth()
      .post(`/sets`, { exercise_id: `${exercise.id}` })
      .then(res => {
        addSet();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Card
      style={{
        minWidth: "245px",
        width: "20%",
        height: "86px",
        background: "#ECECEC",
        border: "none",
        borderRadius: "5px",
        margin: "10px 20px",
        color: "#676767"
      }}
    >
      <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
        <Card.Text>
          {exercise.reps} {exercise.type}
          <br />
          {exercise.sets} sets
        </Card.Text>
        <img
          src={repsButton}
          alt="add a set"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </Card.Body>
    </Card>
  );
};

export default ExerciseCard;
