import './card.js';

const mapDisabled = 1;

const test = document.querySelector('.map__filters');

const test2 = document.querySelector('.ad-form');

const test3 = test.querySelectorAll('.map__filter');

const test5 = test2.querySelectorAll('fieldset');

if (mapDisabled === 1){
  test.classList.add("map__filters--disabled");

  test2.classList.add("ad-form--disabled");

  test3.forEach((user) => {
    user.setAttribute("disabled", "disabled");

  });

  test5.forEach((user) => {
    user.setAttribute("disabled", "disabled");

  });

  const test4 = test.querySelector('.map__features');

  test4.setAttribute("disabled", "disabled");

};
