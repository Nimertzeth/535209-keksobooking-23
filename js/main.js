const getCoordinatesNumber = (number1 = 20, number2 = 25, precision = 4) => {
  const coordinatesLeftSide = (number2 > number1) ? number2 + Math.random() * (number1 - number2) : number1 + Math.random() * (number2 - number1);

  const coordinatesRightSide = Math.floor(coordinatesLeftSide).toString().length;

  return parseFloat (coordinatesLeftSide.toPrecision(precision + coordinatesRightSide));
};

console.log(getCoordinatesNumber());
