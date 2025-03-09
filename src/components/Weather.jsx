import { useEffect, useState } from "react";
import "./Weather.css";

// openweathermap.org : 날씨 데이터에 관한 정보를 가져올 수 있는 API 사이트
const API_KEY = "9f7bce86d0cfd790bdae4f43ed290b08";

function Weather() {
  const [weather, setWeather] = useState(null);

  // 위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const lang = "kr";
      console.log("location", lat, lon);
      getWeatherByCurrentLocation(lat, lon, lang);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon, lang) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    console.log(`weather Data: ${weather}`);
  }, [weather]);

  return (
    <div id="weather">
      {weather ? (
        <div>
          <span>{weather.main.temp}°C</span>
          <span>{weather.weather[0].description}</span>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
