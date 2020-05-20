import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./chart.module.css";
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => { //error in confirmed property i think assigning wrong values thing happen here 
      const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    console.log(dailyData);
    fetchAPI();
  });
  
  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>


    {lineChart}
    </div>
  );
};

export default Chart;