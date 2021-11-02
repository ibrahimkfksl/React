import { useEffect, useState, useContext } from "react";
import axios from "axios";
import CityContext from "../context/CityContext";
import Cloudy from "../weatherIcon/Cloudy.png";
import PartlyCloudy from "../weatherIcon/PartlyCloudy.png";
import Rainy from "../weatherIcon/Rainy.png";
import Snowy from "../weatherIcon/Snowy.png";
import Sunny from "../weatherIcon/Sunny.png";

function GetWeather() {
  const [weather, setWeather] = useState(null);

  const { contextCity, setContextCity } = useContext(CityContext);

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${contextCity}&appid=ee037aa8dd46108358534ef42715401f`
    ).then((res) => setWeather(res.data.weather[0].main));
  }, [contextCity]);

  return (
    <div>
      <br />
      {weather === "Clouds" ? (
        <div>
          <img src={Cloudy} alt="cloudy weather"></img>
          <br />
          <h1>Cloudy</h1>
        </div>
      ) : weather === "Rain" ? (
        <div>
          <img src={Rainy} alt="Rainy Weather"></img>
          <br />
          <h1>Rainy</h1>
        </div>
      ) : weather == "Snow" ? (
        <div>
          <img src={Snowy} alt="Snowy Weather"></img>
          <br />
          <h1>Rainy</h1>
        </div>
      ) : weather == "Sun" ? (
        <div>
          <img src={Sunny} alt="Sunny Weather"></img>
          <br />
          <h1>Rainy</h1>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default GetWeather;
