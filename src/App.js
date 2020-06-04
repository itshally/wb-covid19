import React from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker, ExclusiveContent, Footer } from "./components";
import { fetchData } from "./api";
import Buttons from './components/webmonetize/buttonmonetize'
import logo from './images/logo.jpg';
// import './wm-app'

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
        
        <pre id="container">
        </pre>
        
        <ExclusiveContent />

        {/* !-- container to display monetization events --> */}
        <pre id="container">
        </pre>

        {/* <!-- error messages --> */}
        <div id="error-no-monetization" className={styles.error}>
          Note: In order to see any events here, you need to have an extension installed from a web monetization provider, like <a href="https://coil.com">coil.com</a>.
          (<a href="https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca">chrome</a> <a href="https://addons.mozilla.org/en-US/firefox/addon/coil/">firefox</a>)
        </div>
        <div id="error-wrong-protocol" className={styles.error}>
          Error: This demo must be <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server">run from a server</a>.
        </div>
        <div id="error-timeout" className={styles.error}>
          Warning: No monetization events occurred after six seconds. This probably indicates that you have a web monetization extension, but no active account. Get one at <a href="https://coil.com">coil.com</a>.
        </div>

        <Footer />
      </div>
    );
  }
  
}

export default App;
