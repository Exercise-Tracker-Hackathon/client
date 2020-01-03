import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
        background: "#FFEBE4",
        border: "none",
        borderRadius: "5px",
        margin: "15px"
      }}
    >
      <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
        <Card.Text>
          {exercise.reps} {exercise.type}
          <br />
          {exercise.sets} sets
        </Card.Text>
        <Button
          style={{
            border: "none",
            borderRadius: "50%",
            backgroundColor: "#A33A18",
            color: "#FFF",
            fontSize: "44px",
            lineHeight: "1",
            padding: ".375rem 1rem 1rem 1rem"
          }}
          onClick={handleClick}
        >
          +
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ExerciseCard;
