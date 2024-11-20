const convertToCelsius = function(far) {
  let cel = (far - 32) * 5/9;
  if(cel % 1 === 0){
    return cel;
  }
  else{
    return Number(cel.toFixed(1));
  }

};

const convertToFahrenheit = function(cel) {
  let far = (cel * 9/5) + 32;
  if(far % 1 === 0){
    return far;
  }
  else{
    return Number(far.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
