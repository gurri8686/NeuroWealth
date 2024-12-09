import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartConfiguration } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  // Sample Pie chart data
  const data = {
    labels: ["Optimized", "Neutral", "Underperforming"],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ["#7ed957", "#ffeb3b", "#ff4b5c"],
        hoverBackgroundColor: ["#7ed957", "#ffeb3b", "#ff4b5c"],
        borderWidth: 0,
      },
    ],
  };

  // Chart options (using the correct type for a Pie chart)
  const options: ChartConfiguration<"pie">["options"] = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="w-[40%] m-auto mb-[30px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
