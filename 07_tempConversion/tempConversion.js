const convertToCelsius = function(temperature) {
    temperature = temperature - 32
    return Math.round(temperature / 1.8 * 10) / 10
};

const convertToFahrenheit = function(temperature) {
  temperature = Math.round(temperature*1.8*10) / 10
  return temperature + 32
};

convertToFahrenheit(73.2)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
