const convertToCelsius = function(tempFahrenheit) {
  const conversion = (tempFahrenheit - 32) * 0.556;

  return Math.round(conversion);
};

const convertToFahrenheit = function(tempCelcius) {
  const conversion = (tempCelcius * 1.8) + 32;

  return Math.round(conversion);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
