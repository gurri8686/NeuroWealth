import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartConfiguration } from "chart.js";

// Register the necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Defining types for the chart data
interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
    borderWidth: number;
    pointBackgroundColor: string;
    pointRadius: number;
  }[];
}

const LineChart: React.FC = () => {
  // Sample data for the line chart
  const data: LineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Brain Optimization Level",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
        borderWidth: 2,
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointRadius: 5,
      },
    ],
  };

  // Options for the chart
  const options: ChartConfiguration<"line">["options"] = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Neural Pattern Score Over Time",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Brain Optimization Score (%)",
        },
        min: 0,
        max: 100,
      },
    },
  };

  return <Line className="m-auto w-full" data={data} options={options} />;
};

export default LineChart;
