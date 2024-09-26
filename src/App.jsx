import "./App.css";
import Navbar from "./components/navbar/navbar";
import { useState, useEffect } from "react";
import ImageCloudCelcius from "./components/ImageCloudCelcius/imageCloudCelcius";
import CardToday from "./components/boxtoday/CardToday";
import BoxNextForecast from "./components/boxNextForecast/BoxNextForecast";
import checkCloud from "./utils/checkCloud";
import { getForecast, getWeather } from "./services/apiweather";

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
      const getlat = localStorage.getItem("lat");
      const getlon = localStorage.getItem("lon");

      let lat = getlat ? getlat : "";
      let lon = getlon ? getlon : "";

      if (dataCity !== null) {
        [lat, lon] = dataCity.value.split(" ");
        localStorage.setItem("lat", lat);
        localStorage.setItem("lon", lon);
        localStorage.setItem("namecity", dataCity.label);
      }
      // apicall getweather
      getWeather(lat, lon).then((response) => {
        setFetchDataCity(response);
        setCheckDay(checkCloud(response));
      });
      // apicall getForecast
      const forecast = await getForecast(lat, lon);
      const forecastnext = forecast.list;
      const forecasttoday = forecast.list.slice(1, 5);
      setforecastnext(forecastnext);
      setforecasttoday(forecasttoday);
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
