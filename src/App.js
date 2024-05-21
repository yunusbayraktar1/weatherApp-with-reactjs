import Card from "./Card"
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const key = '6ad45cda045396ed339aef36531864e6';
  const url = 'https://api.openweathermap.org/data/2.5/';

  const [city, setCity] = useState();
  const[temp,setTemp] = useState();
  const[weather,setWeather] = useState();
  const[tmp_min,setTmp_min] = useState();
  const[tmp_max,setTmp_max] = useState();
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    async function getApi() {
      try {
        const result = await axios.get(`${url}weather?q=${searchValue}&appid=${key}&units=metric&lang=en`);
        setCity(result.data)
        setTemp(city.main.temp)
        setWeather(city.weather[0].main)
        setTmp_min(city.main.temp_min)
        setTmp_max(city.main.temp_max)
        
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [searchValue])
  return (
    <div className="App">
      <div className="header">
        <h1>Weather App</h1>
        <input placeholder="enter city" onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <Card 
      city={city}
      temp={temp}
      weather={weather}
      tmp_min ={tmp_min}
      tmp_max ={tmp_max}/>
    </div>
  );
}

export default App;
