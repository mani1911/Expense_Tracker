import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const dataValues = props.data.map((d) => d.value);
  const maxVal = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.data.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxVal}
        />
      ))}
    </div>
  );
}

export default Chart;
