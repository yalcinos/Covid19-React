import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const filterData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate,
    };

    return filterData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const response = axios.get(`${url}/daily`);
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries;
  } catch (error) {
    return error;
  }
};
