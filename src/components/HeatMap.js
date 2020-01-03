import React from "react";
import HeatMap from "react-heatmap-grid";

export default function({ exercises }) {
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

  let exercisesHash = {};

  convertDates.forEach(exercise => {
    if (Object.keys(exercisesHash).includes(exercise.created_at)) {
      exercisesHash[exercise.created_at].total += exercise.sets * exercise.reps;
      exercisesHash[exercise.created_at].exercises = [
        ...exercisesHash[exercise.created_at].exercises,
        exercise
      ];
    } else {
      exercisesHash[exercise.created_at] = {
        total: exercise.sets * exercise.reps,
        exercises: [exercise]
      };
    }
  });

  Object.keys(exercisesHash).forEach(element => {
    const date = new Date(element);
    exercisesHash[element] = {
      ...exercisesHash[element],
      month: date.getMonth(),
      day: date.getDay(),
      week: Math.floor(date.getDay() / 7 + 1),
      weekOfYear: (date.getMonth() + 1) * Math.floor(date.getDay() / 7 + 1)
    };
  });

  const heatMapData = {
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: []
  };

  for (let a in exercisesHash) {
    heatMapData[Object.keys(heatMapData)[exercisesHash[a].day]].splice(
      exercisesHash[a].weekOfYear - 1,
      0,
      exercisesHash[a].total
    );
  }

  const xLabels = new Array(8).fill(0).map((_, i) => `${i}`);
  const displayData = (x, y) => {
    for (let a in exercisesHash) {
      if (exercisesHash[a].day === y && exercisesHash[a].weekOfYear === x + 1) {
        return exercisesHash[a].exercises
          .map(b => {
            return `${b.sets} Sets of ${b.reps} ${b.type}\n`;
          })
          .join("");
      } else {
        return "You haven't exercised on this day yet!";
      }
    }
  };

  const clickHandler = (x, y) => {
    alert(displayData(x, y));
  };

  // Display only even labels
  const xLabelsVisibility = new Array(8).fill(0).map((_, i) => false);

  const yLabels = ["Sun", "", "", "Wed", "", "", "Sat"];
  let data = new Array(yLabels.length).fill(0);

  Object.keys(heatMapData).map((day, i) => (data[i] = heatMapData[day]));

  return (
    <div>
      <HeatMap
        xLabels={xLabels}
        xLabelsLocation={"bottom"}
        yLabels={yLabels}
        xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={data}
        squares={true}
        onClick={(x, y) => clickHandler(x, y)}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: value
            ? `rgb(236, 96, 51, ${1 - (max - value) / max})`
            : "#E8E8E8",
          fontSize: "11.5px"
        })}
      />
    </div>
  );
}
