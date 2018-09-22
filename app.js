const geocode = require('./config/keys');
const argv = require('./config/yargs').argv;
const spinner = require('./config/spinner').spinner;
const colors = require('colors');
const axios = require('axios');

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCKVJYZhCwrqFYQ8dxfmOrpSw38YcHi0C8
const encodePlace = encodeURI(argv.address);
const uri = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodePlace}&key=${geocode.KEY}`;
spinner.start();

axios.get(uri)
  .then( response => {
    const { status } = response.data;

    if (status === 'ZERO_RESULTS') {
      console.log(`Status: ${status}`.bgRed.white);
      return;
    } else {
      spinner.stop(true);
      console.log(`Status: ${status}`.bgGreen.black);
    }

    const { formatted_address, geometry: { location } } = response.data.results[0];

    console.log(`Address: ${formatted_address}`);
    console.log(`Latitude: ${location.lat}`.blue);
    console.log(`Longitude: ${location.lng}`.cyan);
  })
  .catch( err => console.log(`ERROR: ${err}`.bgRed.white));
