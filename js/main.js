function randomNumber(number1, number2) {
  if (number1 < 0 || number2 < 0){
    return 'ошибка';
  }
  else {
    if (number1 > number2) {
      return 'ошибка';
    }
    if (number1 === number2) {
      return number1;
    }
    let rand = number1 + Math.random() * (number2 - number1);
    return Math.floor(rand);
    }
}

function coordinatesNumber(number1, number2, number3) {
  if (number1 < 0 || number2 < 0){
    return 'ошибка';
  }
  else {
    let coordinatesLeftSide = number1 + Math.random() * (number2 - number1);
    let coordinatesRightSide = Math.floor(coordinatesLeftSide).toString().length;
    return coordinatesLeftSide.toPrecision(number3 + coordinatesRightSide);
  }
}

console.log(randomNumber(2, 12));
console.log(coordinatesNumber(1.2, 1.34, 2));
