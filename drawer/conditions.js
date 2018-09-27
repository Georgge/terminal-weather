const CONDITION_IMAGE = {
  CLEAR_SKY: {
    DAY: './assets/sun.jpg',
    NIGHT: './assets/night.jpg',
  },
  FEW_CLOUDS: {
    DAY: './assets/few_day.jpg',
    NIGHT: './assets/few_night.jpg',
  },
  SCATTERED_CLOUDS: './assets/scattered.jpg',
  BROKEN_CLOUDS: './assets/broken_clouds.jpg',
  SHOWER_RAIN: './assets/shower_rain.jpg',
  RAIN: {
    DAY: './assets/rain_day.jpg',
    NIGHT: './assets/rain_night.jpg',
  },
  THUNDERSTORM: './assets/thunderstorm.jpg',
  SNOW: './assets/snow.jpg',
  MIST: './assets/mist.jpg',
  CONFUSED: './assets/confused.jpg',
};

const CONDITION_GROUP = {
  CONFUSED: {
    FILE: CONDITION_IMAGE.CONFUSED,
  },
  CLOUDS: {
    MEANING: 'Clouds',
    FEW_CLOUDS: {
      MEANING: 'few clouds',
      FILE: CONDITION_IMAGE.FEW_CLOUDS,
    },
    SCATTERED_CLOUDS: {
      MEANING: 'scattered clouds',
      FILE: CONDITION_IMAGE.SCATTERED_CLOUDS,
    },
    BROKEN_CLOUDS: {
      MEANING: 'broken clouds',
      FILE: CONDITION_IMAGE.BROKEN_CLOUDS,
    },
    OVERCAST_CLOUDS: {
      MEANING: 'overcast clouds',
      FILE: CONDITION_IMAGE.BROKEN_CLOUDS,
    },
  },
  THUNDERSTORM: {
    MEANING: 'Thunderstorm',
    FILE: CONDITION_IMAGE.THUNDERSTORM,
  },
  DRIZZLE: {
    MEANING: 'Drizzle',
    FILE: CONDITION_IMAGE.SHOWER_RAIN,
  },
  RAIN: {
    MEANING: 'Rain',
    FILE: CONDITION_IMAGE.RAIN,
  },
  SNOW: {
    MEANING: 'Snow',
    FILE: CONDITION_IMAGE.SNOW,
  },
  ATMOSPHERE: {
    MEANING: 'Atmosphere',
    FILE: CONDITION_IMAGE.MIST,
  },
  CLEAR: {
    MEANING: 'Clear',
    FILE: CONDITION_IMAGE.CLEAR_SKY,
  },
};

module.exports = {
  CONDITION_GROUP,
};
