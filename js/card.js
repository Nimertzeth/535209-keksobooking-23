import { getRoomForGuest, getTypeHousing, getPhotos, getFeatures } from './func.js';

const advertisement = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createCustomPopup = (user) => {

  const advertisementElement = advertisement.cloneNode(true);

  advertisementElement.querySelector('.popup__avatar').src = user.author.avatar;

  advertisementElement.querySelector('.popup__text--address').textContent = user.offer.address;

  advertisementElement.querySelector('.popup__text--price').innerHTML = `${user.offer.price} <span>₽/ночь</span>`;

  if (typeof user.offer.title === 'undefined') {
    advertisementElement.querySelector('.popup__title').remove();
  }

  else {
    advertisementElement.querySelector('.popup__title').textContent = user.offer.title;
  }

  if (typeof user.offer.checkin === 'undefined' || typeof user.offer.checkout === 'undefined') {
    advertisementElement.querySelector('.popup__text--time').remove();
  }

  else {
    advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${user.offer.checkin}, выезд до ${user.offer.checkout}`;
  }

  if (typeof user.offer.description === 'undefined') {
    advertisementElement.querySelector('.popup__description').remove();
  }

  else {
    advertisementElement.querySelector('.popup__description').textContent = user.offer.description;
  }

  if (typeof user.offer.rooms === 'undefined') {
    advertisementElement.querySelector('.popup__text--capacity').remove();
  }

  else {
    advertisementElement.querySelector('.popup__text--capacity').textContent = getRoomForGuest(user);
  }

  if (typeof user.offer.type === 'undefined') {
    advertisementElement.querySelector('.popup__type').remove();
  }

  else {
    advertisementElement.querySelector('.popup__type').textContent = getTypeHousing(user);
  }

  getFeatures(user, advertisementElement);

  getPhotos(user, advertisementElement);

  return advertisementElement;
};

export { createCustomPopup };
