import React from 'react';
import styles from './Header.module.css'
import logo from '../../images/logo.jpg';

const Header = () => {

  return (
    <div className={styles.header}>
        <div className={styles.headerContent}>
            <img src={logo} alt="wb-covid19 logo" className={styles.logo}/>
            <h1 className={styles.h1}>COVID-19 Tracker & News</h1>
        </div>
    </div>
  );
}

export default Header;