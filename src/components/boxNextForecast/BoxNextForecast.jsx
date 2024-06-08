import calender from "../../assets/calender.svg";
import "./BoxNextForecast.css";
import { checkCloudTodayForecast } from "../../utils/checkCloudToday";

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
            src={checkCloudTodayForecast(weather[0], checkDay)}
            width={45}
            height={45}
          />
          <div className="tempaverage w-[82px]">
            <div className="tempmax">{tempmax[0]}&deg;C</div>
            <div className="tempmin">{tempmin[0]}&deg;C</div>
          </div>
        </div>
        <div className="forecastday">
          <div style={{ width: "99.7px" }}>{date[1]}</div>
          <img
            src={checkCloudTodayForecast(weather[1], checkDay)}
            width={45}
            height={45}
          />
          <div className="tempaverage w-[82px]">
            <div className="tempmax">{tempmax[1]}&deg;C</div>
            <div className="tempmin">{tempmin[1]}&deg;C</div>
          </div>
        </div>
        <div className="forecastday">
          <div style={{ width: "99.7px" }}>{date[2]}</div>
          <img
            src={checkCloudTodayForecast(weather[2], checkDay)}
            width={45}
            height={45}
          />
          <div className="tempaverage w-[82px]">
            <div className="tempmax">{tempmax[2]}&deg;C</div>
            <div className="tempmin">{tempmin[2]}&deg;C</div>
          </div>
        </div>
        <div className="forecastday">
          <div style={{ width: "99.7px" }}>{date[3]}</div>
          <img
            src={checkCloudTodayForecast(weather[3], checkDay)}
            width={45}
            height={45}
          />
          <div className="tempaverage w-[82px]">
            <div className="tempmax">{tempmax[3]}&deg;C</div>
            <div className="tempmin">{tempmin[3]}&deg;C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxNextForecast;
