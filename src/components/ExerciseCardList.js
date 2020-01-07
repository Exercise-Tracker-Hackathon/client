import React from "react";
import ExerciseCard from "./ExerciseCard";

const ExerciseCardList = ({ exercises, addSet, fetchUser }) => {
  const convertDates = exercises.map(exercise => {
    let date = new Date(exercise.created_at);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return { ...exercise, created_at: year + "/" + month + "/" + dt };
  });

  // call setHours to take the time out of the comparison
  // if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
  //     // Date equals today's date
  // }
  const filteredExercises = convertDates.filter(
    exercise =>
      new Date(exercise.created_at).setHours(0, 0, 0, 0) ===
      new Date().setHours(0, 0, 0, 0)
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginBottom: "30px"
      }}
    >
      {filteredExercises.map((exercise, index) => (
        <ExerciseCard
          exercise={exercise}
          key={index}
          addSet={addSet}
          fetchUser={fetchUser}
        />
      ))}
    </div>
  );
};

export default ExerciseCardList;
