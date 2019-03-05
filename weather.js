class Weather {
  constructor(city, countryCode) {
    this.apiKey = '7dfba6dc6054d63bddd0e0870501e132';
    this.city = city;
    this.countryCode = countryCode;
  }

  // fetch data from api
  async getWeather() {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`);
  
  const responseData = await response.json();
    return responseData;
  }
  
  // change location
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }

}

