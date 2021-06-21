const getRandomNumber = (number1 = 0, number2 = 1, precision = 0) => {
  const min = Math.min(number1, number2);

  const max = Math.max(number1, number2);

  const coordinates = Math.random() * (max - min) + min;

  return parseFloat(coordinates.toFixed(precision));
};

const getRandomArrayElement = (array, min, max) =>
  array[getRandomNumber(min, max, 0)];

export { getRandomNumber, getRandomArrayElement };
