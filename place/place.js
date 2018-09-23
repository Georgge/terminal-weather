const axios = require('axios');
const spinner = require('../config/spinner').spinner;

const getPlace = async( uri ) => {
  spinner.start();

  const response = await axios.get(uri);
  const { status } = response.data;

  if (status === 'ZERO_RESULTS') {
    spinner.stop(true);
    throw new Error(`Status: no results ( ˇ෴ˇ )`.bgRed.white);
  } else {
    spinner.stop(true);
    console.log(`Status: ${status}`.bgGreen.black);
  }

  const { formatted_address, geometry: { location } } = response.data.results[0];

  console.log(`Address: ${formatted_address}`);
  console.log(`Latitude: ${location.lat}`.blue);
  console.log(`Longitude: ${location.lng}`.cyan);
  
  return {
    address: formatted_address,
    lat: location.lat,
    lng: location.lng,
  };
}

module.exports = {
  getPlace
}