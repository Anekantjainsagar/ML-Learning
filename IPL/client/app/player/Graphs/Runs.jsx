// components/LineChart.js

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Runs = ({ data, labels, title, color, border }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: title,
              data: data,
              borderColor: color,
              backgroundColor: border,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              ticks: {
                maxRotation: 90,
                minRotation: 90,
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]);

  return (
    <div className="md:px-3 py-3">
      <h1 className="text-xl mb-3 md:mb-2 font-semibold">{title}</h1>
      <div className="px-1 md:px-3">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default Runs;
