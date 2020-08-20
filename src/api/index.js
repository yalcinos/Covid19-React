import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = () => {
  try {
    const response = axios.get(url);
    console.log(response);
    return response;
  } catch (error) {}
};
