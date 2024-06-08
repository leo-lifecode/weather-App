const API_KEY = "d67e454852842837519116e10a7c2874";
const URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (lat, lon) => {
  const apiweather = await fetch(
    `${URL_WEATHER}?lat=${lat === "" ? "3.65" : lat}&lon=${
      lon === "" ? "98.6667" : lon
    }&appid=${API_KEY}&units=metric`
  );
  const response = await apiweather.json();
  return response;
};

const URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast";
export const getForecast = async (lat, lon) => {
  const apiforecast = await fetch(
    `${URL_FORECAST}?lat=${lat === "" ? "3.65" : lat}&lon=${
      lon === "" ? "98.6667" : lon
    }&appid=${API_KEY}&units=metric`
  );
  const forecast = await apiforecast.json();
  return forecast;
};
