import "./App.css";
import Navbar from "./components/navbar/navbar";
import { useState, useEffect } from "react";
import ImageCloudCelcius from "./components/ImageCloudCelcius/imageCloudCelcius";
import CardToday from "./components/boxtoday/CardToday";
import BoxNextForecast from "./components/boxNextForecast/BoxNextForecast";

function App() {
  const [dataCity, setDataCity] = useState(null);
  const [fetchDataCity, setFetchDataCity] = useState(null);
  const [forecasttoday, setforecasttoday] = useState(null);
  const [forecastnext, setforecastnext] = useState(null);
  const [checkDay, setCheckDay] = useState("");

  async function onSearchChange(searchData) {
    setDataCity(searchData);
  }

  useEffect(() => {
    async function fetchData() {
      let lat = "";
      let lon = "";

      if (dataCity !== null) {
        [lat, lon] = dataCity.value.split(" ");
      }
      const api_key = "d67e454852842837519116e10a7c2874";
      const apiweather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          lat === "" ? "3.65" : lat
        }&lon=${lon === "" ? "98.6667" : lon}&appid=${api_key}&units=metric`
      );
      const response = await apiweather.json();
      setFetchDataCity(response);

      const apiforecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          lat === "" ? "3.65" : lat
        }&lon=${lon === "" ? "98.6667" : lon}&appid=${api_key}&units=metric`
      );
      const forecast = await apiforecast.json();
      const forecastnext = forecast.list;
      setforecastnext(forecastnext);
      const forecasttoday = forecast.list.slice(1, 5);
      setforecasttoday(forecasttoday);

      if (response && response.weather && response.weather[0]) {
        const day = response.weather[0].icon;
        const lastChar = day ? day[day.length - 1] : null;
        lastChar === "n" ? setCheckDay("Malam") : setCheckDay("Siang");
      }
    }

    fetchData();
  }, [dataCity]);

  return (
    <div className={`${checkDay === "Malam" ? "night" : "afternoon"} box`}>
      <div style={{ maxWidth: "1240px", margin: "auto" }} className="m-auto">
        <Navbar onSearchChange={onSearchChange} />
        <div className="homepage">
          <ImageCloudCelcius
            fetchDataCity={fetchDataCity}
            checkDay={checkDay}
          />
          <CardToday checkDay={checkDay} forecasttoday={forecasttoday} />
          <BoxNextForecast checkDay={checkDay} forecastnext={forecastnext} />
        </div>
      </div>
    </div>
  );
}

export default App;
