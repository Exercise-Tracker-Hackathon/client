import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ExerciseCard = ({ exercise }) => {
  const handleClick = () => {};

  return (
    <Card>
      <Card.Body>
        <Card.Text>
          {exercise.reps} {exercise.type}
          <br />
          {exercise.sets} sets
        </Card.Text>
        <Button
          style={{
            borderRadius: "50%",
            backgroundColor: "#EC6033",
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
