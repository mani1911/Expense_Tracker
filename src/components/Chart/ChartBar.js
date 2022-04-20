import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
    let fillHeight =  '0%'; 
    if(props.maxValue > 0){
        let height = Math.round(props.value/props.maxValue * 100);
        fillHeight = `${height}%`
    }
    console.log('nskfnskn')
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
          <div className = "chart-bar__fill" style = {{height : fillHeight}}></div>
      </div>
      <div className = "chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
