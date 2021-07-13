import{ sendData } from './api.js';

import { showAlert } from './func.js';

const body = document.querySelector('body');

const title = document.getElementById('title');

const price = document.getElementById('price');

const typeHousing = document.getElementById('type');

const roomNumber = document.getElementById('room_number');

const capacity = document.getElementById('capacity');

const MIN_LENGHT_TITLE = 30;

const MAX_LENGHT_TITLE = 100;

const MAX_LENGHT_PRICE = 1000000;

title.addEventListener('input', () => {
  const titleLength = title.value.length;

  if (titleLength < MIN_LENGHT_TITLE){
    title.setCustomValidity(`Еще ${MIN_LENGHT_TITLE - titleLength} символов`);
  }

  else if (titleLength > MAX_LENGHT_TITLE){
    title.setCustomValidity(`Удалите лишние ${titleLength - MAX_LENGHT_TITLE} символы`);
  }

  else{
    title.setCustomValidity('');
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
  }

  else if (price.value > MAX_LENGHT_PRICE){
    price.setCustomValidity(`Максимальная стоимость равна ${MAX_LENGHT_PRICE}`);
  }

  else{
    price.setCustomValidity('');
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

const selectElements = document.querySelector('.ad-form__element--time');

const selectElements2 = selectElements.querySelectorAll('select');

for (let count = 0; count < selectElements2.length; count++) {

  selectElements2[count].addEventListener('change', function() {
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

const popupError = () =>{

  const errorTemplate = document.querySelector('#error').content;

  const errorElement = errorTemplate.querySelector('div');

  const errorClonedElement = errorElement.cloneNode(true);

  body.appendChild(errorClonedElement);

  const closeErrorPopup = document.querySelector('.error');

  closeErrorPopup.addEventListener('click', function () {

  document.querySelector('.error').remove();

  });
};



const popupSuccess = () =>{

  const successTemplate = document.querySelector('#success').content;

  const successElement = successTemplate.querySelector('div');

  const successClonedElement = successElement.cloneNode(true);

  body.appendChild(successClonedElement);

  const closeSuccessPopup = document.querySelector('.success');

  closeSuccessPopup.addEventListener('click', function () {

  document.querySelector('.success').remove();

  });
};

const form = document.querySelector('.ad-form');

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => popupError(),
      new FormData(evt.target),
    );
  });
};

const closeUserModal = () => {
  alert('ошибка')
};



setUserFormSubmit(popupSuccess);

