const asciiArt = require("ascii-art");

const draw = () => {
  const image = new asciiArt.Image({
    filepath: './assets/cloudy.jpg',
    alphabet: 'variant4',
    width: 50,
    height: 50,
  });

  image.write((err, rendered) => {
    console.log(rendered);
  });
};

module.exports = {
  draw,
};
