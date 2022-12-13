import "./CurrentWeather.css";
import { WiDayCloudy } from "react-icons/wi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CurrentWeather = ({ weatherData }) => {
  console.log(weatherData);

  const condition = weatherData?.text;

  const findIcon = (condition) => {
    let icon;
    switch (condition) {
      case "Clear":
        icon = "fa-cloud";
        break;
      case "Sunny":
        icon = "fa-sun";
        break;
      case "Mist":
        icon = "fa-cloud-meatball";
        break;
      case "Cloudy":
        icon = "fa-cloud";
        break;
      case "Partly cloudy":
        icon = "fa-cloud-sun";
        break;
      case "Overcast":
        icon = "fa-smog";
        break;
      case "Blizzard":
        icon = "fa-cloud-sun";
        break;
      case "Fog":
        icon = "fa-cloud-sun";
        break;
      case condition?.includes("rain"):
        icon = "fa-cloud-rain";
        break;
      case condition?.includes("snow"):
        icon = "fa-snowflake";
        break;
      default:
        icon = "fa-cloud";
    }
    return icon;
  };

  const time = new Date().toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const date = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // console.log((weatherData?.date).split(" ")[1]);

  return (
    <div className="current">
      <h1 className="current-temp">
        {weatherData?.temp}
        <sup>°C</sup>
      </h1>
      <div className="location-date">
        <h2 className="location">{weatherData?.location}</h2>
        <h3 className="current-date">
          {time} - {date}
        </h3>
      </div>
      <div className="current-weather">
        <FontAwesomeIcon
          icon={`fa-solid ${findIcon(condition)}`}
          className="current-weather__icon"
        />
        <h3 className="current-weather__text">{weatherData?.text}</h3>
      </div>
    </div>
  );
};

export default CurrentWeather;
