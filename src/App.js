import React, { useEffect } from "react";
import logo from "./logo.svg";

import styles from "./App.module.css";
import { Cards, Chart, Country } from "./components";
import { fetchData } from "./api";

function App() {
  useEffect(() => {
    fetchAPIData();
  }, []);

  async function fetchAPIData() {
    const response = await fetchData();
    console.log(response);
    return response;
  }
  return (
    <div className={styles.container}>
      <Cards />
      <Chart />
      <Country />
    </div>
  );
}

export default App;
