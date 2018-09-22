const argv = require('yargs').options({
  address: {
    alias: 'a',
    desc: 'Address of the place to obtain climate',
    demand: true
  }
}).argv;

module.exports = {
  argv
}
