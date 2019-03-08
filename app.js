// init store object
const store = new Store();

// get stored location data
const weatherLoc = store.getLocationData();

// init weather object
const weather = new Weather(weatherLoc.city, weatherLoc.countryCode);

// init ui object
const ui = new UI();


// change location event
document.getElementById('w-search-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value;

  // change location
  weather.changeLocation(city, countryCode);

  // set location in local storage
  store.setLocationData(city, countryCode);

  // get and display weather again
  getWeather();

  // close modal
  $('#locModal').modal('hide');
});

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


 

function getWeather(){
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
  }