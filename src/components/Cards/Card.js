import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Card.module.css";

const Cards = (props) => {
  const { data, isLoading } = props;
  console.log(data);
  const renderCardByType = () => {
    const resultType = Object.keys(data.data);
    var patientStatus = resultType.slice(0, 3);
    const statisticData = data.data;

    return (
      <Grid container spacing={3} justify="center">
        {patientStatus.map((status, index) => {
          return (
            <Grid key={index} item component={Card}>
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
                  {statisticData.lastUpdate}
                </Typography>
                <Typography variant="body2">
                  Number of active cases of Covid-19
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    );
  };
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        renderCardByType()

        // <Grid container spacing={3} justify="center">
        //   <Grid item component={Card}>
        //     <CardContent>
        //       <Typography color="textSecondary" gutterBottom>
        //         Infected
        //       </Typography>
        //       <Typography variant="h5" gutterBottom>
        //         <CountUp
        //           start={0}
        //           end={data.data.confirmed.value}
        //           duration={2.5}
        //           separator=","
        //         />
        //       </Typography>
        //       <Typography color="textSecondary">
        //         {data.data.lastUpdate}
        //       </Typography>
        //       <Typography variant="body2">
        //         Number of active cases of Covid-19
        //       </Typography>
        //     </CardContent>
        //   </Grid>
        //   <Grid item component={Card}>
        //     <CardContent>
        //       <Typography color="textSecondary" gutterBottom>
        //         Recovered
        //       </Typography>
        //       <Typography variant="h5" gutterBottom>
        //         DATA
        //       </Typography>
        //       <Typography color="textSecondary">Date</Typography>
        //       <Typography variant="body2">
        //         {" "}
        //         Number of Recovered cases of Covid-19
        //       </Typography>
        //     </CardContent>
        //   </Grid>
        //   <Grid item component={Card}>
        //     <CardContent>
        //       <Typography color="textSecondary" gutterBottom>
        //         Deaths
        //       </Typography>
        //       <Typography variant="h5" gutterBottom>
        //         DATA
        //       </Typography>
        //       <Typography color="textSecondary">Date</Typography>
        //       <Typography variant="body2">
        //         {" "}
        //         Number of Deaths cases of Covid-19
        //       </Typography>
        //     </CardContent>
        //   </Grid>
        // </Grid>
      )}
    </div>
  );
};

export default Cards;
