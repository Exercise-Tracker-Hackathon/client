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
    } else {
      exercisesHash[exercise.created_at] = {
        total: exercise.sets * exercise.reps
      };
    }
  });

  console.log(exercisesHash);

  Object.keys(exercisesHash).forEach(element => {
    const date = new Date(element);
    exercisesHash[element] = {
      ...exercisesHash[element],
      month: date.getMonth(),
      day: date.getDay(),
      week: Math.floor(date.getDay() / 7 + 1),
      weekofYear: (date.getMonth() + 1) * Math.floor(date.getDay() / 7 + 1)
    };
  });

  console.log(exercisesHash);

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
      exercisesHash[a].weekofYear - 1,
      0,
      exercisesHash[a].total
    );
  }

  console.log(heatMapData);

  const xLabels = new Array(8).fill(0).map((_, i) => `${i}`);

  // Display only even labels
  const xLabelsVisibility = new Array(7)
    .fill(0)
    .map((_, i) => (i % 2 === 0 ? true : false));

  const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let data = new Array(yLabels.length).fill(0);

  Object.keys(heatMapData).map((day, i) => (data[i] = heatMapData[day]));

  console.log(data);
  return (
    <div>
      <HeatMap
        xLabels={xLabels}
        xLabelsLocation={"bottom"}
        yLabels={yLabels}
        xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={data}
        squares
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          fontSize: "11.5px",
          color: "#000"
        })}
        cellRender={value => value && `${value}`}
      />
    </div>
  );
}
