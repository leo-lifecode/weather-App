import React from "react";
import "./CardToday.css";
import cloudtime from "../../assets/images/cloudtime.png";

const CardToday = () => {
  return (
    <div className="boxtoday">
      <div className="today">
        <div className="todayfont">Today</div>
        <div className="time">Mar,10</div>
      </div>
      <div className="card-forecast">
        <div className="boxtime">
          <div className="time">31&deg;C</div>
          <img src={cloudtime} alt="cloudtime" />
          <div className="time">17.00</div>
        </div>
        <div className="boxtime active">
          <div className="time">31&deg;C</div>
          <img src={cloudtime} alt="cloudtime" />
          <div className="time">17.00</div>
        </div>
        <div className="boxtime">
          <div className="time">31&deg;C</div>
          <img src={cloudtime} alt="cloudtime" />
          <div className="time">17.00</div>
        </div>
        <div className="boxtime">
          <div className="time">31&deg;C</div>
          <img src={cloudtime} alt="cloudtime" />
          <div className="time">17.00</div>
        </div>
      </div>
    </div>
    
  );
};

export default CardToday;
