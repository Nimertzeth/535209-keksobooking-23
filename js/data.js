import { getRandomNumber, getRandomArrayElement } from './func.js';

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

  return `${locationLat}, ${locationLng}`;
};

const getPrice = () => `${getRandomNumber(100, 1000, 0)} ₽`;

const getRooms = () => getRandomNumber(1, 10, 0);

const getGuests = () => getRandomNumber(1, 6, 0);

const getFeatures  = () => {
  const numbers = [];

  const newFeatures = [];

  for (let count1 = 0; count1 < getRandomNumber(1, FEATURES.length-1, 0); count1++) {
    numbers.push (getRandomNumber(0, FEATURES.length-1, 0));
  }

  const numbersNotDooble = Array.from(new Set(numbers));

  for (let count2 = 0; count2 < numbersNotDooble.length; count2++) {
    newFeatures.push (FEATURES[numbersNotDooble[count2]]);
  }

  return newFeatures;
};

const getPhotos  = () => {
  const newPhotos = [];

  for (let count1 = 0; count1 < getRandomNumber(1, 9, 0); count1++) {
    newPhotos.push (PHOTOS[getRandomNumber(0, 2, 0)]);
  }

  return newPhotos;
};

const createOffer = () =>
  ({
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
    photos: getPhotos()});

const createLocation = () =>
  ({
    lat: getRandomNumber(35.65000, 35.70000, 5),
    lng: getRandomNumber(139.70000, 139.80000, 5)});

const USERS_COUNT = 10;

const createUser = () =>
  ({
    name: AUTHOR,
    offer: createOffer(),
    location: createLocation()});

const users = new Array(USERS_COUNT).fill(null).map(() => createUser());

const getAvatar = (element) => {

  for(let count1 = 0; count1 < element.length; count1++){

    let count2 = 1;

    count2 += count1;

    if( count2 > 9){
      element[count1].offer.avatar = `img/avatars/user${count2}.png`;

    }

    else{
      element[count1].offer.avatar = `img/avatars/user0${count2}.png`;

    }

  }

};

getAvatar(users);

export { users };
