import{ sendData } from './api.js';

import { reset } from './map.js';

const body = document.querySelector('body');

const title = document.getElementById('title');

const price = document.getElementById('price');

const features = document.querySelectorAll('.features__checkbox');

const typeHousing = document.getElementById('type');

const roomNumber = document.getElementById('room_number');

const capacity = document.getElementById('capacity');

const timein = document.getElementById('timein');

const timeout = document.getElementById('timeout');

const description = document.getElementById('description');

const MIN_LENGHT_TITLE = 30;

const MAX_LENGHT_TITLE = 100;

const MAX_LENGHT_PRICE = 1000000;

const selectElement = document.querySelector('.ad-form__element--time');

const selectElements = selectElement.querySelectorAll('select');

const form = document.querySelector('.ad-form');

const formButton = document.querySelector('.ad-form__submit');

const inputsForValidations = [title,price];

title.addEventListener('input', () => {
  const titleLength = title.value.length;

  if (titleLength < MIN_LENGHT_TITLE){
    title.setCustomValidity(`Еще ${MIN_LENGHT_TITLE - titleLength} символов`);
    title.classList.add('not-validity');
  }

  else if (titleLength > MAX_LENGHT_TITLE){
    title.setCustomValidity(`Удалите лишние ${titleLength - MAX_LENGHT_TITLE} символы`);
    title.classList.add('not-validity');
  }

  else{
    title.setCustomValidity('');
    title.classList.remove('not-validity');
  }

  title.reportValidity();

});

typeHousing.addEventListener('input', () => {

  let typeHousingMinValue = 0;

  switch (typeHousing.value) {

    case 'flat':
      typeHousingMinValue = 1000;
      price.placeholder = typeHousingMinValue;
      break;

    case 'bungalow':
      typeHousingMinValue = 0;
      price.placeholder = typeHousingMinValue;
      break;

    case 'house':
      typeHousingMinValue = 5000;
      price.placeholder = typeHousingMinValue;
      break;

    case 'palace':
      typeHousingMinValue = 10000;
      price.placeholder = typeHousingMinValue;
      break;

    case 'hotel':
      typeHousingMinValue = 3000;
      price.placeholder = typeHousingMinValue;
      break;
  }

});

price.addEventListener('input', () => {

  let typeHousingMinValue = 0;

  switch (typeHousing.value) {

    case 'flat':
      typeHousingMinValue = 1000;
      break;

    case 'bungalow':
      typeHousingMinValue = 0;
      break;

    case 'house':
      typeHousingMinValue = 5000;
      break;

    case 'palace':
      typeHousingMinValue = 10000;
      break;

    case 'hotel':
      typeHousingMinValue = 3000;
      break;
  }

  if (price.value < typeHousingMinValue){
    price.setCustomValidity(`Минимальная стоимость равна ${typeHousingMinValue}`);
    price.classList.add('not-validity');
  }

  else if (price.value > MAX_LENGHT_PRICE){
    price.setCustomValidity(`Максимальная стоимость равна ${MAX_LENGHT_PRICE}`);
    price.classList.add('not-validity');
  }

  else{
    price.setCustomValidity('');
    price.classList.remove('not-validity');
  }

  price.reportValidity();

});

if (roomNumber.value === '1'){
  const roomNumberOption = capacity.getElementsByTagName('option');

  for (let count = 0; count < roomNumberOption.length; count++) {

    if (roomNumberOption[count].value !== '1'){
      roomNumberOption[count].setAttribute('disabled', 'disabled');
      roomNumberOption[count].removeAttribute('selected', 'selected');
    }

    if (roomNumberOption[count].value === '1'){
      roomNumberOption[count].setAttribute('selected', 'selected');
      roomNumberOption[count].removeAttribute('disabled', 'disabled');
    }

  }
}

roomNumber.addEventListener('input', () => {

  if (roomNumber.value === '1'){
    const roomNumberOption = capacity.getElementsByTagName('option');
    for (let count = 0; count < roomNumberOption.length; count++) {

      if (roomNumberOption[count].value !== '1'){
        roomNumberOption[count].setAttribute('disabled', 'disabled');
        roomNumberOption[count].removeAttribute('selected', 'selected');
      }

      if (roomNumberOption[count].value === '1'){
        roomNumberOption[count].setAttribute('selected', 'selected');
        roomNumberOption[count].removeAttribute('disabled', 'disabled');
      }

    }
  }

  if (roomNumber.value === '2'){
    const roomNumberOption = capacity.getElementsByTagName('option');
    for (let count = 0; count < roomNumberOption.length; count++) {

      if (roomNumberOption[count].value > '2' || roomNumberOption[count].value === '0'){
        roomNumberOption[count].setAttribute('disabled', 'disabled');
        roomNumberOption[count].removeAttribute('selected', 'selected');
      }

      if (roomNumberOption[count].value === '2'){
        roomNumberOption[count].removeAttribute('disabled', 'disabled');
        roomNumberOption[count].setAttribute('selected', 'selected');
      }

      if (roomNumberOption[count].value === '1'){
        roomNumberOption[count].removeAttribute('disabled', 'disabled');
        roomNumberOption[count].removeAttribute('selected', 'selected');
      }

    }
  }

  if (roomNumber.value === '3'){
    const roomNumberOption = capacity.getElementsByTagName('option');
    for (let count = 0; count < roomNumberOption.length; count++) {

      if (roomNumberOption[count].value === '0'){
        roomNumberOption[count].setAttribute('disabled', 'disabled');
      }

      if (roomNumberOption[count].value === '3'){
        roomNumberOption[count].removeAttribute('disabled', 'disabled');
        roomNumberOption[count].setAttribute('selected', 'selected');
      }

      if (roomNumberOption[count].value === '2'){
        roomNumberOption[count].removeAttribute('disabled', 'disabled');
        roomNumberOption[count].removeAttribute('selected', 'selected');
      }

      if (roomNumberOption[count].value === '1'){
        roomNumberOption[count].removeAttribute('disabled', 'disabled');
        roomNumberOption[count].removeAttribute('selected', 'selected');
      }

    }
  }

  if (roomNumber.value === '100'){
    const roomNumberOption = capacity.getElementsByTagName('option');
    for (let count = 0; count < roomNumberOption.length; count++) {

      if (roomNumberOption[count].value !== '0'){
        roomNumberOption[count].setAttribute('disabled', 'disabled');
        roomNumberOption[count].removeAttribute('selected', 'selected');
      }
      if (roomNumberOption[count].value === '0'){
        roomNumberOption[count].removeAttribute('disabled', 'disabled');
        roomNumberOption[count].setAttribute('selected', 'selected');
      }

    }
  }

});

for (let count = 0; count < selectElements.length; count++) {

  selectElements[count].addEventListener('change', function() {
    const id = this.getAttribute('id');

    let select;

    if( id === 'timeout' ) {

      select = document.querySelector('#timein');
    }

    else if( id === 'timein' ) {

      select = document.querySelector('#timeout');
    }

    select.value = this.value;
  });
}


const showPopup = (type) => {

  const template = document.querySelector(`#${type}`).content;

  const element = template.querySelector('div');

  const clonedElement = element.cloneNode(true);

  body.appendChild(clonedElement);

  const closePopup = document.querySelector(`.${type}`);

  const closePopupButton = document.querySelector('.error__button');

  const removePopupEsc = (evt) => {

    if (evt.key === 'Escape' || evt.key === 'Esc') {

      evt.preventDefault();

      document.removeEventListener('keydown', removePopupEsc);
      if(document.querySelector(`.${type}`)){

        document.querySelector(`.${type}`).remove();
      }
    }
  };

  const removePopup = () => {

    closePopup.removeEventListener('click', removePopup);

    if(document.querySelector(`.${type}`)){

      document.querySelector(`.${type}`).remove();
    }
  };

  const removePopupButton = () => {

    closePopupButton.removeEventListener('click', removePopupButton);

    document.querySelector(`.${type}`).remove();

  };

  if (closePopup.classList.contains('success')) {

    closePopup.addEventListener('click', removePopup);

    document.addEventListener('keydown', removePopupEsc);

    reset.click();

  }

  if (closePopup.classList.contains('error')) {

    closePopup.addEventListener('click', removePopup);

    document.addEventListener('keydown', removePopupEsc);

    closePopupButton.addEventListener('click', removePopupButton);
  }
};

const userFormSubmitProcess = (evt) => {
  evt.preventDefault();

  sendData(
    () => showPopup('success'),

    () => showPopup('error'),

    new FormData(evt.target),
  );
};

const validation = () => {

  const validationLogs = [];

  for (let count = 0; count < inputsForValidations.length; count++) {

    const input = inputsForValidations[count];

    if (input.checkValidity() === false) {
      validationLogs.push(false);

      input.classList.add('not-validity');
    }
    else {
      validationLogs.push(true);

      input.classList.remove('not-validity');
    }

  }

  if (!validationLogs.includes(false) ) {

    form.addEventListener('submit', userFormSubmitProcess );
  }

};

formButton.addEventListener('click', validation );

export{ title, features, capacity, roomNumber, typeHousing, price, timein, timeout, description };
