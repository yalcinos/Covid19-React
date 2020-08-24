import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    margin: "50px 0",
  },

  deaths: {
    borderBlockWidth: 10,
    margin: "0 2%",
    borderBottom: "10px solid tomato",
  },
  confirmed: {
    borderBlockWidth: 10,
    margin: "0 2%",
    borderBottom: "10px solid green",
  },
  recovered: {
    borderBlockWidth: 10,
    margin: "0 2%",
    borderBottom: "10px solid blue",
  },
});

//Card Component
const Cards = (props) => {
  const { data, isLoading } = props;
  //we pass our pross to useStyle for conditional rendering
  const classes = useStyles();

  //Render Card by type
  const renderCardByType = () => {
    const resultType = Object.keys(data.data);
    let patientStatus = resultType.slice(0, 3);

    const statisticData = data.data;

    return (
      <Grid container spacing={3} justify="center">
        {patientStatus.map((status, index) => {
          return (
            <Grid
              key={index}
              item
              component={Card}
              xs={12}
              md={3}
              className={
                status === "deaths"
                  ? classes.deaths
                  : status === "confirmed"
                  ? classes.confirmed
                  : classes.recovered
              }
            >
              <Grid container justify={"center"} spacing={3}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {status}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    <CountUp
                      start={0}
                      end={statisticData[status].value}
                      duration={2.5}
                      separator=","
                    />
                  </Typography>
                  <Typography color="textSecondary">
                    {new Date(statisticData.lastUpdate).toDateString()}
                  </Typography>
                  <Typography variant="body2">
                    Number of active cases of Covid-19
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    );
  };
  return (
    <div className={classes.container}>
      {isLoading ? <Typography>Loading...</Typography> : renderCardByType()}
    </div>
  );
};

export default Cards;
