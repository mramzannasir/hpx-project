// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Today", "Nov 12", "Nov 20", "Dec3"];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgb(255, 199, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [1, 1, 20, 35, 50],
    },
  ],
};

const LineChart = () => {
  return (
    <div className="chart-container flex justify-center xl:px-56 ">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
