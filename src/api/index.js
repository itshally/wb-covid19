import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async ( country ) => {

  //modifies the url according to the country to get the data
  let modifyURL = url;

  if (country) modifyURL = `${url}/countries/${country}`;

  try {
    
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(modifyURL);

    let modifiedData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate,
    };

    return modifiedData;

  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async() => {

  try {
    const { data } = await axios.get(`${url}/daily`);

    let modifiedData = data.map((dailyData) => ({
      confirmed:dailyData.confirmed.total,
      deaths:dailyData.deaths.total,
      date:dailyData.reportDate,            
    }));

    return modifiedData;
  } catch (error){
    console.log(error);
  }
}

export const fetchCountries = async () => {
  
  try{
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
    
  } catch(error){
    console.log(error);
  }
}