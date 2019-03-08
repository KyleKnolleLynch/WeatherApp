class UI {
  constructor() {
    this.name = document.getElementById("w-location");
    this.countryCode = document.getElementById("countryCode");
    this.mainTemp = document.getElementById("w-string");
    this.weatherDescription = document.getElementById("w-desc");
    //this.weatherIcon = document.getElementById('w-icon');
    this.mainHumidity = document.getElementById("w-humidity");
    this.rain = document.getElementById("w-rain");
    this.wind = document.getElementById("w-wind");
    this.snow = document.getElementById("w-snow");
  }

  paint(weather) {
    this.name.textContent = weather.name;
    this.countryCode.textContent = weather.sys.country;
    this.mainTemp.textContent = `${weather.main.temp} F`;
    this.weatherDescription.textContent = weather.weather[0].description;
    //this.weatherIcon.setAttribute('src', weather.weather[0].icon);
    this.mainHumidity.textContent = `Relative Humidity: ${
      weather.main.humidity
    }%`;
    this.wind.textContent = `Wind: ${weather.wind.speed} MPH`;

    if (weather.rain === undefined) {
      this.rain.textContent = "Rainfall: 0 In.";
    } else {
      this.rain.textContent = `Rainfall: ${weather.rain["1h"]} In.`;
    }

    if (weather.snow === undefined) {
      this.snow.textContent = "";
    } else {
      this.snow.textContent = `Snow: ${weather.snow["1h"]} In.`;
    }
  }
}
