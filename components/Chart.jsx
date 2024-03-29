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
      Color: "rgb(255, 255, 255)",
      data: [1, 1, 20, 35, 50],
    },
  ],
};

const LineChart = () => {
  return (
    <>
      <h1 className="lg:text-4xl text-2xl font-semibold text-white text-center p-6 lg:py-14">
        Rate Per 10,000 Sacrifices Point
      </h1>
      <div className="chart-container flex justify-center md:mx-24 xl:mx-64 py-4  bg-[#0D0F15] text-stone-100 rounded-2xl">
        <Line data={data} />
      </div>
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
    </>
  );
};
export default LineChart;
