import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ExerciseCard from "./ExerciseCard";

const ExerciseCardList = ({ exercises }) => {
  return (
    <CardDeck>
      {exercises.map((exercise, index) => (
        <ExerciseCard exercise={exercise} key={index} />
      ))}
    </CardDeck>
  );
};

export default ExerciseCardList;
