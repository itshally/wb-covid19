import React from "react";
import styles from "./App.module.css";
//import Cards from './components/cards/cards';
//import Chart from "./components/chart/chart";
//import CountryPicker from "./components/CountryPicker/CountryPicker";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
class App extends React.Component {
  state = {
    //object🔽
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
