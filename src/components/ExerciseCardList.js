import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ExerciseCard from "./ExerciseCard";

const ExerciseCardList = ({ exercises, addSet }) => {
  console.log(exercises);
  console.log(exercises.map(exercise => exercise.created_at));
  console.log(typeof exercises[0]);
  console.log(typeof exercises[0].toString());

  return (
    <CardDeck>
      {exercises.map((exercise, index) => (
        <ExerciseCard exercise={exercise} key={index} addSet={addSet} />
      ))}
    </CardDeck>
  );
};

export default ExerciseCardList;
