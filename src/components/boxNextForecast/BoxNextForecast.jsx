import React from "react";
import calender from "../../assets/calender.svg";
import "./BoxNextForecast.css";
import bigrain from "../../assets/images/bigrain.png";

const BoxNextForecast = () => {
  return (
    <div className="box-forecast">
      <div className="nextForecast">
        <div className="todayfont">Next Forecast</div>
        <img className="time" src={calender} alt="calender" />
      </div>
      <div className="box-forecastday">
        <div className="forecastday">
          <div>monday</div>
          <img src={bigrain} width={50} height={50} alt="" />
          <div className="tempaverage">
            <div className="tempmax">13&deg;C</div>
            <div className="tempmin">17&deg;C</div>
          </div>
        </div>
        <div className="forecastday">
          <div>monday</div>
          <img src={bigrain} width={50} height={50} alt="" />
          <div className="tempaverage">
            <div className="tempmax">13&deg;C</div>
            <div className="tempmin">17&deg;C</div>
          </div>
        </div>
        <div className="forecastday">
          <div>monday</div>
          <img src={bigrain} width={50} height={50} alt="" />
          <div className="tempaverage">
            <div className="tempmax">13&deg;C</div>
            <div className="tempmin">17&deg;C</div>
          </div>
        </div>
        <div className="forecastday">
          <div>monday</div>
          <img src={bigrain} width={50} height={50} alt="" />
          <div className="tempaverage">
            <div className="tempmax">13&deg;C</div>
            <div className="tempmin">17&deg;C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxNextForecast;
