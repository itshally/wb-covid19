import React from "react";
import { Card, CardContent, Typography, Grid } from "../../../node_modules/@material-ui/core";
import CountUp from "../../../node_modules/react-countup";
import cx from "../../../node_modules/classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "loading";
  }
  return (
    <div className={styles.container}>
      
      <Grid container spacing={2} justify="center">

        <Grid
            item
            xs={10}         
            component={Card}
            md={10}
            className={cx(styles.card, styles.total)}
          >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Cases
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.85}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
            Number of confirmed cases of COVID-19           
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={10}         
          component={Card}
          md={2}
          className={cx(styles.card, styles.active)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active Cases
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value - (recovered.value + deaths.value)}
                duration={2.85}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
            Number of active cases of COVID-19           
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={10}
          md={2}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.85}
                separator=","
              />{" "}
            </Typography>
            <Typography colr="textSecondary">
            {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={10}
          md={2}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.85}
                separator=","
              />{" "}
            </Typography>
            <Typography colr="textSecondary">
            {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={10}         
          component={Card}
          md={2}
          className={cx(styles.card, styles.closed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Closed Cases
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value + deaths.value}
                duration={2.85}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
            Number of closed cases of COVID-19           
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
