import React from "react";
import { Line } from "react-chartjs-2";
//import { subDays, addDays, parse, format } from "date-fns";

const LineChart = () => {
  /*
    const selectedDateAsADate = parse(selectedDate)
    const todaysDate = new Date()
    const tomorrowsDate = addDays(todaysDate, 1)
    
    const todaysDateString = format(todaysDate, "MMM.d")
    const tomorrowsDateString = format(tomorrowsDate, "MMM.d")
    */

  return (
    <div className="chart">
      <Line
        data={{
          labels: [
            "DEC.15",
            "DEC.20",
            "DEC.25",
            "DEC.31",
            "JAN.2",
            "JAN.8",
            "JAN.15",
          ],
          datasets: [
            {
              label: "BTC",
              data: [
                33000,
                34500,
                32600,
                33800,
                35500,
                37000,
                35500,
                36300,
                39000,
                36700,
                34800,
              ],
              fill: true,
              backgroundColor: ["rgba( 244, 199, 199, 0.4 )"],
              borderColor: ["rgba(57, 52, 52 )"],
              lineTension: 0,
            },
            {
              label: "ETH",
              data: [1300, 1200, 1450, 1230, 1200, 1170, 1580],
              fill: true,
              backgroundColor: ["rgba( 244, 199, 199, 0.5 )"],
              borderColor: ["rgba(57, 52, 52 )"],
              lineTension: 0,
            },
          ],
        }}
        width={950}
        height={150}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                },
                gridLines: {
                  borderDash: [6, 4],
                  color: "#ABA9A9  ",
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default LineChart;
