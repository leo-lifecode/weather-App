import rain from "../assets/images/3.png";
import thunders from "../assets/images/4.png";
import nightCloud from "../assets/images/2.png";
import sunClouds from "../assets/images/1.png";

import sunCloud from "../assets/images/Sun cloud angled rain (2).png";
import thunder from "../assets/images/thunder.png";
import sunRain from "../assets/images/Sun cloud angled rain.png";
import NightRain from "../assets/images/Moon cloud mid rain.png";
import NightClouds from "../assets/images/5.png";

export function checkCloudTodayCard(param, checkDay) {
  if (checkDay === "Siang") {
    if (param === "Clouds" || param === "Clear" || param === "Haze")
      return sunCloud;
    if (param === "Rain") return sunRain;
    if (param === "Thunderstorm" || param === "Drizzle") return thunder;
  } else {
    if (param === "Clouds" || param === "Clear" || param === "Haze")
      return NightClouds;
    if (param === "Rain") return NightRain;
    if (param === "Thunderstorm" || param === "Drizzle") return thunder;
  }
}

export function checkCloudTodayForecast(param, checkDay) {
  if (checkDay === "Siang") {
    if (param === "Clouds" || param === "Clear" || param === "Haze")
      return sunClouds;
    if (param === "Rain") return rain;
    if (param === "Thunderstorm" || param === "Drizzle") return thunders;
  } else {
    if (param === "Clouds" || param === "Clear" || param === "Haze")
      return nightCloud;
    if (param === "Thunderstorm" || param === "Drizzle") return thunders;
    if (param === "Rain") return rain;
  }
}
