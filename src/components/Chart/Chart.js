import React from "react";
import { Typography } from "@material-ui/core";
import { Line, Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  chartContainer: {
    display: "flex",
    justifyContent: "center",
    width: "85%",
  },
});

const Chart = (props) => {
  const classes = useStyles();
  const { dataDaily, data, isLoading, country } = props;

  const lineChart = dataDaily[0] ? (
    <Line
      data={{
        labels: dataDaily.map((data) => data.reportDate),
        datasets: [
          {
            data: dataDaily.map((data) => data.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
          },
          {
            data: dataDaily.map((data) => data.deaths.total),
            label: "Deaths",
            borderColor: "red",
          },
        ],
      }}
    />
  ) : null;

  const renderGraphByCountry = () => {
    const resultType = Object.keys(data.data);
    const statisticData = data.data;
    console.log(statisticData.confirmed.value);
    return resultType.length || country !== undefined ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgb(255, 0, 0)",
                "rgb(0, 204, 102)",
                "rgb(0, 102, 204)",
              ],
              data: [
                statisticData.confirmed.value,
                statisticData.recovered.value,
                statisticData.deaths.value,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current Status in ${country}` },
        }}
      />
    ) : null;
  };

  //Render
  return (
    <div className={classes.chartContainer}>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : country ? (
        renderGraphByCountry()
      ) : (
        lineChart
      )}
    </div>
  );
};

export default Chart;
