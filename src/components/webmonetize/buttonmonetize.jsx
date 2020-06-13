import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import '../../wm-app'
import styles from './buttonmonetize.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    'text-align' : 'center',
    'padding-top' : '10px'
  },
}));

const handleChange = event => {
  
}

export default function Buttons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" id="stop-button">Stop Monetization</Button>
      <Button variant="contained" id="start-button">Start Monetization</Button>
      <div id="loading">
        <p className={styles.loading}>Current Monetization State: <span id="state"></span></p>
      </div>
    </div>
  );
}