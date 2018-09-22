const geocode = require('./config/keys');
const argv = require('./config/yargs').argv;
const colors = require('colors');
const axios = require('axios');

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCKVJYZhCwrqFYQ8dxfmOrpSw38YcHi0C8
const encodePlace = encodeURI(argv.address);
const uri = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodePlace}&key=${geocode.KEY}`;

axios.get(uri)
  .then( response => {
    const { status } = response;
    const data = response.data.results[0];

    if (status !== 200) {
      console.log(`Status: ${status}`.red);
      return;
    } else {
      console.log(`Status: ${status}`.green);
    }

    console.log( data );
  })
  .catch( err => console.log(`ERROR: ${err}`));
