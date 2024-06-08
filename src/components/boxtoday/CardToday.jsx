import "./CardToday.css";
import { checkCloudTodayCard } from "../../utils/checkCloudToday";
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
            src={checkCloudTodayCard(weather[0], checkDay)}
            alt="Cloudtoday()"
            className="cloudtoday"
          />
          <div className="time">{times[0]}</div>
        </div>
        <div className="boxtime">
          <div className="time">{Math.round(temp[1])}&deg;C</div>
          <img
            src={checkCloudTodayCard(weather[1], checkDay)}
            alt="Cloudtoday()"
            className="cloudtoday"
          />
          <div className="time">{times[1]}</div>
        </div>
        <div className="boxtime">
          <div className="time">{Math.round(temp[2])}&deg;C</div>
          <img
            src={checkCloudTodayCard(weather[2], checkDay)}
            alt="Cloudtoday()"
            className="cloudtoday"
          />
          <div className="time">{times[2]}</div>
        </div>
        <div className="boxtime">
          <div className="time">{Math.round(temp[3])}&deg;C</div>
          <img
            src={checkCloudTodayCard(weather[3], checkDay)}
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
