// init weather object
const weather = new Weather('Austin', 'US');

weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));