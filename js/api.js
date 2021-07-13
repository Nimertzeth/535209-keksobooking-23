import { showAlert } from './func.js';

const getData = (getArr) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
      .then((response) => response.json())
      .then((users) =>{
        getArr(users);
      })
      .catch((error) => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking/data',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};

