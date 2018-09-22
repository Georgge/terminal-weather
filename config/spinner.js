const Spinner = require('cli-spinner').Spinner;

const spinner = new Spinner('Looking for place');
spinner.setSpinnerString(18);

module.exports = {
  spinner
}