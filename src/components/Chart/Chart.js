import React from "react";
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
  const { dataDaily } = props;
  console.log(dataDaily);
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

  //Render
  return <div className={classes.chartContainer}>{lineChart}</div>;
};

export default Chart;
