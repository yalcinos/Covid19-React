import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import styles from "./App.module.css";
import { Cards, Chart, Country } from "./components";
import { fetchData } from "./api";

function App() {
  const [covidData, setcovidData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAPIData();
  }, []);

  const fetchAPIData = async () => {
    const response = await fetchData();
    setcovidData({ data: response });
    if (response !== undefined || response != null) {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Cards data={covidData} isLoading={loading} />
      <Chart />
      <Country />
    </div>
  );
}

export default App;
