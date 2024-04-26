import React from "react";
import sunCloud from "../../assets/images/Sun cloud angled rain.png";
import celci from "../../assets/celci.svg";
import wind from "../../assets/humadity.svg";
import clouds from "../../assets/Union.svg";

import "./imageCloudCelcius.css";

const ImageCloudCelcius = ({ fetchDataCity }) => {
  console.log("ini fetchDataCity", fetchDataCity);
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

  return (
    <div className="cloud">
      <img src={sunCloud} className="sun-cloud" />
      <div className="celcius">{temp}&deg;</div>
      <div>preciptations</div>
      <div className="celmax">
        <div>max : {tempmax}&deg;</div>
        <div>min : {tempmin}&deg;</div>
      </div>

      <div className="boxhumadity">
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
