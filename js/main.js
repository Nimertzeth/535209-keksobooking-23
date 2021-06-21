const getRandomNumber = (number1 = 0, number2 = 1, precision = 0) => {
  const min = Math.min(number1, number2);

  const max = Math.max(number1, number2);

  const coordinates = Math.random() * (max - min) + min;

  return parseFloat(coordinates.toFixed(precision));
};

const getRandomArrayElement = (array, min, max) => {
  return array[getRandomNumber(min, max, 0)];
};

const AUTHOR = {
  name: 'author'};

const TITLES = ['тайтл1', 'тайтл2', 'тайтл3', 'тайтл4', 'тайтл5'];

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKINS = ['12:00', '13:00', '14:00'];

const CHECKOUTS = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTIONS = ['тест1', 'тест2', 'тест3', 'тест4', 'тест5'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getAddress = () =>{
  const locationLat = getRandomNumber(1, 100, 5);

  const locationLng = getRandomNumber(1, 100, 5);

  return locationLat + ', ' + locationLng;
};

const getPrice = () => {

  return getRandomNumber(100, 1000, 0) + '₽';
};

const getRooms = () => {
  return getRandomNumber(1, 10, 0);
};

const getGuests = () => {
  return getRandomNumber(1, 6, 0);
};

const getFeatures  = () => {
  const numbers = [];

  const newFeatures = [];

  for (let i = 0; i < getRandomNumber(1, FEATURES.length-1, 0); i++) {

    numbers.push (getRandomNumber(0, FEATURES.length-1, 0));
  }

  const numbersNotDooble = Array.from(new Set(numbers));

  for (let k = 0; k < numbersNotDooble.length; k++) {

    newFeatures.push (FEATURES[numbersNotDooble[k]]);
  }

  return newFeatures;
};

const getPhotos  = () => {
  const newPhotos = [];

  for (let i = 0; i < getRandomNumber(1, 9, 0); i++) {

    newPhotos.push (PHOTOS[getRandomNumber(0, 2, 0)]);
  }

  return newPhotos;
};

const createOffer = () => {
  return {

    title: getRandomArrayElement(TITLES, 0, 4),
    address: getAddress(),
    price: getPrice(),
    type: getRandomArrayElement(TYPES, 0, 4),
    rooms: getRooms(),
    guests: getGuests(),
    checkin: getRandomArrayElement(CHECKINS, 0, 2),
    checkout: getRandomArrayElement(CHECKOUTS, 0, 2),
    features:getFeatures(),
    description: getRandomArrayElement(DESCRIPTIONS, 0, 4),
    photos: getPhotos()};
};

const createLocation = () => {
  return {

    lat: getRandomNumber(35.65000, 35.70000, 5),
    lng: getRandomNumber(139.70000, 139.80000, 5)};
};

const USERS_COUNT = 10;

const createUser = () => {
  return {

    name: AUTHOR,
    offer: createOffer(),
    location: createLocation()};
};

const users = new Array(USERS_COUNT).fill(null).map(() => createUser());

const getAvatar = (element) => {

  for(let i = 0; i < element.length; i++){

    let j = 1;

    j += i;

    if( j > 9){

      element[i].offer.avatar = 'img/avatars/user' + j + '.png';

    }

    else{

      element[i].offer.avatar = 'img/avatars/user0' + j + '.png';

    }

  }

};

getAvatar(users);

console.log(users);
