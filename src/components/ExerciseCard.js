import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//card deck in dashboard for map
const ExerciseCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <p> Reps ExerciseName</p>
          <p> Sets sets</p>
        </Card.Text>
        <Button
          style={{
            borderRadius: "50%",
            backgroundColor: "#EC6033",
            color: "#FFF",
            fontSize: "44px"
          }}
        >
          +
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ExerciseCard;
