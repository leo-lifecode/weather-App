export default function checkCloud(response, setCheckDay) {
  if (response && response.weather && response.weather[0]) {
    const day = response.weather[0].icon;
    const lastChar = day ? day[day.length - 1] : null;
    if (lastChar === "n") {
      return "Malam";
    } else {
      return "Siang";
    }
  }
}
