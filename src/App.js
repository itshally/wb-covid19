import React from "react";
import styles from "./App.module.css";
import { Header, Cards, Chart, CountryPicker, ExclusiveContent, Footer } from "./components";
import { fetchData } from "./api";
import Buttons from './components/webmonetize/buttonmonetize'

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
        <Header/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/> 
        <Buttons />
        <div className={styles.exclusiveContainer}>
          <div id="exclusive" className="hidden">
            <ExclusiveContent /> 
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default App;
