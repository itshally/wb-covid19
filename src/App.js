import React from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker, ExclusiveContent } from "./components";
import { fetchData } from "./api";
import Buttons from './components/webmonetize/buttonmonetize'
import logo from './images/logo.jpg';

class App extends React.Component {
  state = {
    //object🔽
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/> 
        <Buttons />
        <ExclusiveContent />
      </div>
    );
  }
}

export default App;
