import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Cards, Chart, Country } from "./components";
import { fetchData, fetchDailyData, fetchCountries } from "./api";

function App() {
  const [covidData, setcovidData] = useState();
  const [loading, setLoading] = useState(true);
  const [dailyData, setDailyData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  console.log(countriesData);
  useEffect(() => {
    fetchAPIData();
    dailyCases();
    countryList();
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
    const data = response.data;
    setDailyData(data);
  };
  const countryList = async () => {
    const response = await fetchCountries();
    setCountriesData(response);
  };
  return (
    <div className={styles.container}>
      <Cards data={covidData} isLoading={loading} />
      <Country data={countriesData} />
      <Chart dataDaily={dailyData} />
    </div>
  );
}

export default App;
