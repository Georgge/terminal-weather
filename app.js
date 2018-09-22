const geocode = require('./config/keys');
const colors = require('colors');
const axios = require('axios');
const argv = require('yargs').options({
  address: {
    alias: 'a',
    desc: 'Address of the place to obtain climate',
    demand: true
  }
}).argv;

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCKVJYZhCwrqFYQ8dxfmOrpSw38YcHi0C8
const encodePlace = encodeURI(argv.address);
const uri = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodePlace}&key=${geocode.KEY}`;

axios.get(uri)
  .then( response => {
    if (response.status !== 200) {
      console.log(`Status: ${response.status}`.red);
    } else {
      console.log(`Status: ${response.status}`.green);
    }

    console.log( JSON.stringify(response.data, undefined, 2));
  })
  .catch( err => console.log(`ERROR: ${err}`));
