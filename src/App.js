import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import styles from "./App.module.css";
import { Cards, Chart, Country } from "./components";
import { fetchData, fetchDailyData } from "./api";

function App() {
  const [covidData, setcovidData] = useState();
  const [loading, setLoading] = useState(true);
  const [dailyData, setDailyData] = useState({});
  console.log(dailyData);
  useEffect(() => {
    fetchAPIData();
    dailyCases();
  }, []);

  const fetchAPIData = async () => {
    const response = await fetchData();
    setcovidData({ data: response });
    if (response !== undefined || response != null) {
      setLoading(false);
    }
  };
  const dailyCases = async () => {
    const response = await fetchDailyData();
    setDailyData(response);
  };

  return (
    <div className={styles.container}>
      <Cards data={covidData} isLoading={loading} />
      <Chart data={dailyData} />
      <Country />
    </div>
  );
}

export default App;
