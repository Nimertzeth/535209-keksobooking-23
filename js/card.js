import { users } from './data.js';

const map = document.querySelector('#map-canvas');

const advertisement = document.querySelector('#card')
  .content
  .querySelector('.popup');

users.forEach((user) => {

  if ('rooms' in user.offer ) {
    console.log('1111');
  };

  const advertisementElement = advertisement.cloneNode(true);

  if (typeof user.name.name === 'undefined') {
      advertisementElement.querySelector('.popup__title').remove();
    }

  else {
    advertisementElement.querySelector('.popup__title').textContent = user.name.name;
  };

  if (typeof user.offer.checkin === 'undefined' || typeof user.offer.checkout === 'undefined') {
      advertisementElement.querySelector('.popup__text--time').remove();
    }

  else {
    advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${user.offer.checkin}, выезд до ${user.offer.checkout}`;
  };

  advertisementElement.querySelector('.popup__avatar').src = user.offer.avatar;

  if (typeof user.offer.description === 'undefined') {
      advertisementElement.querySelector('.popup__description').remove();
    }

  else {
    advertisementElement.querySelector('.popup__description').textContent = user.offer.description;
  };

  advertisementElement.querySelector('.popup__text--address').textContent = user.offer.address;

  advertisementElement.querySelector('.popup__text--price').innerHTML = `${user.offer.price} <span>₽/ночь</span>`;

  let leftSideTextRooms = '';

  let rightSideTextRooms = '';

  if (user.offer.rooms===1) {
    leftSideTextRooms = `${user.offer.rooms} комната для `;
  }

  else {
    leftSideTextRooms = `${user.offer.rooms} комнаты для `;
  }

  if (user.offer.guests===1) {
    rightSideTextRooms = `${user.offer.guests} гостя `;
  }

  else {
    rightSideTextRooms = `${user.offer.guests} гостей `;
  }

  if (typeof user.offer.rooms === 'undefined') {
    advertisementElement.querySelector('.popup__text--capacity').remove();
  }

  else {
    advertisementElement.querySelector('.popup__text--capacity').textContent = `${leftSideTextRooms} ${rightSideTextRooms}`;
  }

  if (typeof user.offer.type === 'undefined') {
    advertisementElement.querySelector('.popup__type').remove();
  }

  else {
    switch (user.offer.type) {
      case 'flat':
        advertisementElement.querySelector('.popup__type').textContent = 'Квартира';
        break;

      case 'bungalow':
        advertisementElement.querySelector('.popup__type').textContent = 'Бунгало';
        break;

      case 'house':
        advertisementElement.querySelector('.popup__type').textContent = 'Дом';
        break;

      case 'palace':
        advertisementElement.querySelector('.popup__type').textContent = 'Дворец';
        break;

      case 'hotel':
        advertisementElement.querySelector('.popup__type').textContent = 'Отель';
        break;
    }
  }

  const featuresElements = user.offer.features.map((feature) => `popup__feature--${feature}`);

  advertisementElement.querySelectorAll('.popup__feature')
    .forEach((item) => {
      const mod = item.classList[1];
      if(!featuresElements.includes(mod)){
        item.remove();
      }
    });

  advertisementElement.querySelectorAll('.popup__photo')
    .forEach((item) => {
      item.remove();
    });

  const fragment = document.createDocumentFragment();

  for (let count = 0; count < user.offer.photos.length; count++) {
    const newElement = document.createElement('img');
    newElement.classList.add('popup__photo');
    newElement.setAttribute('width', '45');
    newElement.setAttribute('height', '40');
    newElement.src = user.offer.photos[count];
    fragment.appendChild(newElement);
  }

  const photos = advertisementElement.querySelector('.popup__photos');
  photos.appendChild(fragment);

  map.appendChild(advertisementElement);

});


