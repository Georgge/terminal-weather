const geocode = require('./config/keys').geocode;
const argv = require('./config/yargs').argv;
const place = require('./place/place');
const drawer = require('./drawer/drawer');
const colors = require('colors');


const encodePlace = encodeURI(argv.address);
const uri = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodePlace}&key=${geocode.KEY}`;

place.getPlace(uri)
  .then((response) => {
    const { lat, lng } = response;
    return place.getWeather(lat, lng);
  })
  .then((response) => {
    const { weather } = response;
    console.log(`Weather: ${weather[0].main}`.yellow);
    drawer.draw();
  })
  .catch((err) => {
    console.log(err.message);
  });
