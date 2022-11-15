// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Today", "Nov 12", "Nov 20", "Dec3"];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgb(19, 22, 27)",
      borderColor: "rgb(255, 99, 132)",
      data: [50, 30, 10, 0],
    },
  ],
};

const LineChart = () => {
  return (
    <>
      <div className="chart-container flex justify-center bg-[#0D0F15] text-stone-100 rounded-2xl">
        <Line data={data} />
      </div>
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
    </>
  );
};
export default LineChart;
