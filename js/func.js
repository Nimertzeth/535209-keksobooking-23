const ALERT_SHOW_TIME = 5000;

const getRandomNumber = (number1 = 0, number2 = 1, precision = 0) => {
  const min = Math.min(number1, number2);

  const max = Math.max(number1, number2);

  const coordinates = Math.random() * (max - min) + min;

  return parseFloat(coordinates.toFixed(precision));
};

const getRandomArrayElement = (array, min, max) =>
  array[getRandomNumber(min, max, 0)];

const getRoomForGuest = (user) =>{

  let leftSideTextRooms = '';

  let rightSideTextRooms = '';

  if (user.offer.rooms === 1) {
    leftSideTextRooms = `${user.offer.rooms} комната для `;
  }

  else {
    leftSideTextRooms = `${user.offer.rooms} комнаты для `;
  }

  if (user.offer.guests === 1) {
    rightSideTextRooms = `${user.offer.guests} гостя `;
  }

  else {
    rightSideTextRooms = `${user.offer.guests} гостей `;
  }

  const roomsForGuests = `${leftSideTextRooms} ${rightSideTextRooms} `;

  return(roomsForGuests);
};

const getTypeHousing = (arr) =>{
  let typeHousing = '';

  switch (arr.offer.type) {

    case 'flat':
      typeHousing = 'Квартира';
      break;

    case 'bungalow':
      typeHousing = 'Бунгало';
      break;

    case 'house':
      typeHousing = 'Дом';
      break;

    case 'palace':
      typeHousing = 'Дворец';
      break;

    case 'hotel':
      typeHousing = 'Отель';
      break;
  }

  return(typeHousing);
};

const getPhotos = (arr, advertisementElement) =>{
  if(typeof arr.offer.photos !== 'undefined'){
    advertisementElement.querySelectorAll('.popup__photo')
      .forEach((item) => {
        item.remove();
      });

    const fragment = document.createDocumentFragment();

    for (let count = 0; count < arr.offer.photos.length; count++) {
      const newElement = document.createElement('img');

      newElement.classList.add('popup__photo');

      newElement.setAttribute('width', '45');

      newElement.setAttribute('height', '40');

      newElement.src = arr.offer.photos[count];

      fragment.appendChild(newElement);
    }

    const photos = advertisementElement.querySelector('.popup__photos');
    photos.appendChild(fragment);
  }
  else{
    advertisementElement.querySelector('.popup__photos').remove();
  }
};
const getFeatures = (arr, advertisementElement) =>{
  if(typeof arr.offer.features !== 'undefined'){
    const featuresElements = arr.offer.features.map((feature) => `popup__feature--${feature}`);

    advertisementElement.querySelectorAll('.popup__feature')
      .forEach((item) => {
        const mod = item.classList[1];

        if(!featuresElements.includes(mod)){
          item.remove();
        }
      });
  }
  else{
    advertisementElement.querySelector('.popup__features').remove();
  }
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomNumber, getRandomArrayElement, getRoomForGuest, getTypeHousing, getPhotos, getFeatures, showAlert };
