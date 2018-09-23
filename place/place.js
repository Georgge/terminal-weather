const spinner = require('../config/spinner').spinner;
const ow = require('../config/keys').openWeather;
const axios = require('axios');

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

  console.log(`Wheather at: ${formatted_address}`.cyan);
  
  return {
    address: formatted_address,
    lat: location.lat,
    lng: location.lng,
  };
}

const getWeather = async( lat, lng ) => {
  spinner.setSpinnerTitle('Loking for weather');
  spinner.start();
  const uri = `${ow.BASE_URI}?lat=${lat}&lon=${lng}&units=${ow.UNITS}&appid=${ow.KEY}`;
  const request = await axios.get(uri);
  const { cod, main: { temp } } = request.data;

  if ( cod !== 200 ) {
    spinner.stop(true);
    throw new Error(`Status: ${cod}`.bgRed.white);
  } else {
    spinner.stop(true);
    console.log(`Current Temp: ${temp}°C`.green);
  }
  return request.data;
};

module.exports = {
  getPlace,
  getWeather,
};
