import React from "react";
import HeatMap from "react-heatmap-grid";

export default function({ exercises }) {
  const xLabels = new Array(7).fill(0).map((_, i) => `${i}`);

  // Display only even labels
  const xLabelsVisibility = new Array(7)
    .fill(0)
    .map((_, i) => (i % 2 === 0 ? true : false));

  const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() => exercises.map(exercise => exercise.sets * exercise.reps));

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
        cellRender={value => value && `${value}%`}
      />
    </div>
  );
}
