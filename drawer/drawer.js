const CONDITION = require('./conditions').CONDITION_GROUP;
const asciiArt = require("ascii-art");

const getFile = (weather) => {
  console.log(weather[0].main);
  switch (weather[0].main) {
    case CONDITION.THUNDERSTORM.MEANING:
      return CONDITION.THUNDERSTORM.FILE;
    case CONDITION.DRIZZLE.MEANING:
      return CONDITION.DRIZZLE.FILE;
    case CONDITION.RAIN.MEANING:
      return CONDITION.RAIN.FILE.NIGHT;
    case CONDITION.CLEAR.MEANING:
      return CONDITION.CLEAR.FILE.DAY;
    case CONDITION.CLOUDS.MEANING:
      const desc = weather[0].description;
      let file = null;

      if (desc === CONDITION.CLOUDS.OVERCAST_CLOUDS.MEANING) {
        file = CONDITION.CLOUDS.OVERCAST_CLOUDS.FILE;
      } else if (desc === CONDITION.CLOUDS.FEW_CLOUDS.MEANING) {
        file = CONDITION.CLOUDS.FEW_CLOUDS.FILE.NIGHT;
      } else if (desc === CONDITION.CLOUDS.SCATTERED_CLOUDS.MEANING) {
        file = CONDITION.CLOUDS.SCATTERED_CLOUDS.FILE;
      } else if (desc === CONDITION.CLOUDS.BROKEN_CLOUDS.MEANING) {
        file = CONDITION.CLOUDS.BROKEN_CLOUDS.FILE;
      }
      return file;
    default:
      break;
  }
};

const draw = (weather) => {
  const file = getFile(weather);
  const image = new asciiArt.Image({
    filepath: file,
    alphabet: 'variant4',
    width: 35,
    height: 35,
  });

  image.write((err, rendered) => {
    console.log(rendered);
  });
};

module.exports = {
  draw,
};
