import React from "react";
import sunCloud from "../../assets/images/Sun cloud angled rain (2).png";
import thunder from "../../assets/images/thunder.png";
import sunRain from "../../assets/images/Sun cloud angled rain.png";
import NightRain from "../../assets/images/Moon cloud mid rain.png";
import NightClouds from "../../assets/images/5.png";
import celci from "../../assets/celci.svg";
import wind from "../../assets/humadity.svg";
import clouds from "../../assets/Union.svg";
import "./imageCloudCelcius.css";

const ImageCloudCelcius = ({ fetchDataCity, checkDay }) => {
  let humidity,
    temp,
    tempmax,
    tempmin,
    windspeed,
    weather = "";

  if (fetchDataCity !== null) {
    humidity = `${fetchDataCity.main.humidity}%`;
    temp = `${Math.round(fetchDataCity.main.temp)}`;
    tempmax = `${Math.round(fetchDataCity.main.temp_max)}`;
    tempmin = `${Math.round(fetchDataCity.main.temp_min)}`;
    windspeed = `${Math.round(fetchDataCity.wind.speed)} m/s`;
    weather = fetchDataCity.weather[0].main;
  }

  function imageCloud() {
    if (checkDay === "Siang") {
      if (weather === "Clouds" || weather === "Clear") return sunCloud;
      if (weather === "Rain") return sunRain;
      if (weather === "Thunderstorm") return thunder;
    } else {
      if (weather === "Clouds" || weather === "Clear") return NightClouds;
      if (weather === "Rain") return NightRain;
    }
  }

  return (
    <div className="cloud">
      <img src={imageCloud()} className="sun-cloud" />
      <div className="celcius">{temp}&deg;</div>
      <div>preciptations</div>
      <div className="celmax">
        <div>max : {tempmax}&deg;</div>
        <div>min : {tempmin}&deg;</div>
      </div>

      <div
        className={`${
          checkDay === "Malam" ? "cardnight" : "cardafternoon"
        } boxhumadity`}
      >
        <div>
          <img src={celci} alt="humadity" />
          <p>{humidity}</p>
        </div>
        <div>
          <img src={clouds} alt="clouds" />
          <p>{weather}</p>
        </div>
        <div>
          <img src={wind} alt="wind" />
          <p>{windspeed}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCloudCelcius;
