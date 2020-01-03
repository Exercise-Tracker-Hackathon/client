import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ExerciseCard from "./ExerciseCard";

const ExerciseCardList = ({ exercises, addSet }) => {
  return (
    <CardDeck>
      {exercises.map((exercise, index) => (
        <ExerciseCard exercise={exercise} key={index} addSet={addSet} />
      ))}
    </CardDeck>
  );
};

export default ExerciseCardList;
