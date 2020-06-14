import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import '../../wm-app'
import '../../hide.css'
import styles from './buttonmonetize.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: 'auto',
    },
    'text-align' : 'center',
    'padding-top' : '10px',
    'width' : '90%',
    'margin' : 'auto'
  },
}));

export default function Buttons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" id="stop-button">Stop Monetization</Button>
      <Button variant="contained" id="start-button">Start Monetization</Button>
      <div id="loading">
        <p className={styles.loading}>Current Monetization State: <span id="state"></span></p>
      </div>

      <div id="ec-info" className="ecInfo hidden">
        <p className={styles.ecInfoText}>
          This section contains an exclusive content;
        </p>
        <p className={styles.ecInfoText}>
          but it seems a <a href="https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca?hl=en"> Coil Extension </a> nor
          a <a href="https://www.pumabrowser.com/"> Puma Browser </a> is not enabled yet. 
        </p>
        <p className={styles.ecInfoText}>In order to support us, please sign up first on <a href="https://coil.com/">Coil</a> and then install the Coil Extension to view this section.</p>
      </div>
    </div>
  );
}