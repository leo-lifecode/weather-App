import React from "react";
import calender from "../../assets/calender.svg";
import "./BoxNextForecast.css";
import rain from "../../assets/images/3.png";
import thunder from "../../assets/images/4.png";
import nightCloud from "../../assets/images/2.png";
import sunCloud from "../../assets/images/1.png";

const BoxNextForecast = ({ checkDay, forecastnext }) => {
  let forecast4day = [];
  let date = [];
  let tempmax = [];
  let tempmin = [];
  let weather = [];
  if (forecastnext !== null) {
    forecast4day = forecastnext.filter(
      (item) => item.dt_txt.split(" ")[1] === "00:00:00"
    );
    date = forecast4day.map((item) => {
      const dayOfWeek = new Date(item.dt_txt.split(" ")[0]).toLocaleDateString(
        "en-US",
        { weekday: "long" }
      );
      return dayOfWeek;
    });
    tempmax = forecast4day.map((item) => Math.round(item.main.temp_max));
    tempmin = forecast4day.map((item) => Math.round(item.main.temp_min));
    weather = forecast4day.map((item) => item.weather[0].main);
  }

  function Cloudtoday(param) {
    if (checkDay === "Siang") {
      if (param === "Clouds" || param === "Clear") return sunCloud;
      if (param === "Rain") return rain;
      if (param === "Thunderstorm") return thunder;
    } else {
      if (param === "Clouds" || param === "Clear") return nightCloud;
      if (param === "Thunderstorm") return thunder;
      if (param === "Rain") return rain;
    }
  }
  console.log(weather);
  return (
    <div
      className={`${
        checkDay === "Malam" ? "cardnight" : "cardafternoon"
      } box-forecast`}
    >
      <div className="nextForecast">
        <div className="todayfont">Next Forecast</div>
        <img className="time" src={calender} alt="calender" />
      </div>
      <div className="box-forecastday">
        <div className="forecastday">
          <div style={{ width: "99.7px" }}>{date[0]}</div>
          <img
            src={Cloudtoday(weather[0])}
            width={45}
            height={45}
            alt={weather[0]}
          />
          <div className="tempaverage">
            <div className="tempmax">{tempmax[0]}&deg;C</div>
            <div className="tempmin">{tempmin[0]}&deg;C</div>
          </div>
        </div>
        <div className="forecastday">
          <div style={{ width: "99.7px" }}>{date[1]}</div>
          <img
            src={Cloudtoday(weather[1])}
            width={45}
            height={45}
            alt={weather[1]}
          />
          <div className="tempaverage">
            <div className="tempmax">{tempmax[1]}&deg;C</div>
            <div className="tempmin">{tempmin[1]}&deg;C</div>
          </div>
        </div>
        <div className="forecastday">
          <div style={{ width: "99.7px" }}>{date[2]}</div>
          <img
            src={Cloudtoday(weather[2])}
            width={45}
            height={45}
            alt={weather[2]}
          />
          <div className="tempaverage">
            <div className="tempmax">{tempmax[2]}&deg;C</div>
            <div className="tempmin">{tempmin[2]}&deg;C</div>
          </div>
        </div>
        <div className="forecastday">
          <div style={{ width: "99.7px" }}>{date[3]}</div>
          <img
            src={Cloudtoday(weather[3])}
            width={45}
            height={45}
            alt={weather[3]}
          />
          <div className="tempaverage">
            <div className="tempmax">{tempmax[3]}&deg;C</div>
            <div className="tempmin">{tempmin[3]}&deg;C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxNextForecast;
