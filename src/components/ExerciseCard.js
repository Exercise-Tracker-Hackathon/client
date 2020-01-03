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
        width: "245px",
        background: "#FFEBE4",
        border: "none",
        borderRadius: "5px"
      }}
    >
      <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
        <Card.Text style={{}}>
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
