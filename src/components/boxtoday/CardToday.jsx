import React from "react";
import "./CardToday.css";
import sunCloud from "../../assets/images/Sun cloud angled rain (2).png";
import thunder from "../../assets/images/thunder.png";
import sunRain from "../../assets/images/Sun cloud angled rain.png";
import NightRain from "../../assets/images/Moon cloud mid rain.png";
import NightClouds from "../../assets/images/5.png";

const CardToday = ({ checkDay, forecasttoday }) => {
  let dateday = [];
  let times = [];
  let temp = [];
  let weather = [];
  let day = [];

  if (forecasttoday !== null) {
    dateday = forecasttoday.map((item) => item.dt_txt.split(" ")[0]);
    times = forecasttoday.map((item) => item.dt_txt.split(" ")[1].substr(0, 5));
    temp = forecasttoday.map((item) => item.main.temp);
    weather = forecasttoday.map((item) => item.weather[0].main);

    const tanggal = dateday[0];
    const dateObj = new Date(tanggal);

    const bulan = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      dateObj
    );
    const tanggalan = dateObj.getDate();
    day = [bulan, tanggalan];
  }

  function Cloudtoday(param) {
    if (checkDay === "Siang") {
      if (param === "Clouds" || param === "Clear") return sunCloud;
      if (param === "Rain") return sunRain;
      if (param === "Thunderstorm") return thunder;
    } else {
      if (param === "Clouds" || param === "Clear") return NightClouds;
      if (param === "Rain") return NightRain;
    }
  }

  return (
    <div
      className={`${
        checkDay === "Malam" ? "cardnight" : "cardafternoon"
      } boxtoday`}
    >
      <div className="today">
        <div className="todayfont">Today</div>
        <div className="time">
          {day[0]},{day[1]}
        </div>
      </div>
      <div className="card-forecast">
        <div className="boxtime">
          <div className="time">{Math.round(temp[0])}&deg;C</div>
          <img
            src={Cloudtoday(weather[0])}
            alt="Cloudtoday()"
            className="cloudtoday"
          />
          <div className="time">{times[0]}</div>
        </div>
        <div className="boxtime">
          <div className="time">{Math.round(temp[1])}&deg;C</div>
          <img
            src={Cloudtoday(weather[1])}
            alt="Cloudtoday()"
            className="cloudtoday"
          />
          <div className="time">{times[1]}</div>
        </div>
        <div className="boxtime">
          <div className="time">{Math.round(temp[2])}&deg;C</div>
          <img
            src={Cloudtoday(weather[2])}
            alt="Cloudtoday()"
            className="cloudtoday"
          />
          <div className="time">{times[2]}</div>
        </div>
        <div className="boxtime">
          <div className="time">{Math.round(temp[3])}&deg;C</div>
          <img
            src={Cloudtoday(weather[3])}
            alt="cloudtime"
            className="cloudtoday"
          />
          <div className="time">{times[3]}</div>
        </div>
      </div>
    </div>
  );
};

export default CardToday;
