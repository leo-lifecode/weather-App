import "./App.css";
import Navbar from "./components/navbar/navbar";
import { useState, useEffect } from "react";
import ImageCloudCelcius from "./components/ImageCloudCelcius/imageCloudCelcius";
import CardToday from "./components/boxtoday/CardToday";
import BoxNextForecast from "./components/boxNextForecast/BoxNextForecast";

function App() {
  const [dataCity, setDataCity] = useState(null);
  const [fetchDataCity, setFetchDataCity] = useState(null);

  function onSearchChange(searchData) {
    setDataCity(searchData);
  }

  useEffect(() => {
    async function cloud() {
      let lat = "";
      let lon = "";
      dataCity !== null ? ([lat, lon] = dataCity.value.split(" ")) : null;
      const api_key = "d67e454852842837519116e10a7c2874";
      const apiweather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          lat === "" ? "3.65" : lat
        }&lon=${lon === "" ? "98.6667" : lon}&appid=${api_key}&units=metric`
      );
      const response = await apiweather.json();
      console.log("ini response", response);
      setFetchDataCity(response);
    }
    cloud();
  }, [dataCity]);

  return (
    <div className="box">
      <Navbar onSearchChange={onSearchChange} />
      <div className="homepage">
        <ImageCloudCelcius fetchDataCity={fetchDataCity} />
        <CardToday />
        <BoxNextForecast />
      </div>
    </div>
  );
}

export default App;
