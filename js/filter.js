import { users } from './data.js';

const housingPrice = document.getElementById('housing-price');

const housingType = document.getElementById('housing-type');

const housingRooms = document.getElementById('housing-rooms');

const housingGuests = document.getElementById('housing-guests');

const housingFeatures = document.getElementById('housing-features');

let usersFiltred;

const getUsersAll = (arr) =>{
  // 1 Бунгало

  // все гости, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow";

    });
  }
  // все гости, все комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow";

    });
  }
  // все гости, все комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow";

    });
  }
  // все гости, все комнаты, от любой суммы
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow";

    });
  }

  // 1 гость, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 0 гостей, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, до 10 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 50 тыщ
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, любая сумма
  if(housingType.value === "bungalow" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "bungalow" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, до 10 тыщ.
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, до 10 тыщ.
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, до 10 тыщ.
  if(housingType.value === "bungalow" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "bungalow" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 10 до 50 тыщ.
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 10 до 50 тыщ.
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 10 до 50 тыщ.
  if(housingType.value === "bungalow" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "bungalow" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 50 тыщ.
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 50 тыщ.
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 50 тыщ.
  if(housingType.value === "bungalow" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "bungalow" && e.offer.rooms === 3;

    });
  }
  // 2 Дворец

  // все гости, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace";

    });
  }
  // все гости, все комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace";

    });
  }
  // все гости, все комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace";

    });
  }
  // все гости, все комнаты, от любой суммы
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace";

    });
  }

  // 1 гость, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 0 гостей, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, до 10 тыщ
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 50 тыщ
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, любая сумма
  if(housingType.value === "palace" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "palace" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, до 10 тыщ.
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, до 10 тыщ.
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, до 10 тыщ.
  if(housingType.value === "palace" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "palace" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 10 до 50 тыщ.
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 10 до 50 тыщ.
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 10 до 50 тыщ.
  if(housingType.value === "palace" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "palace" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 50 тыщ.
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 50 тыщ.
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 50 тыщ.
  if(housingType.value === "palace" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "palace" && e.offer.rooms === 3;

    });
  }
    // 3 Квартира
  // все гости, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat";

    });
  }
  // все гости, все комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat";

    });
  }
  // все гости, все комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat";

    });
  }
  // все гости, все комнаты, от любой суммы
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat";

    });
  }

  // 1 гость, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 0 гостей, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, до 10 тыщ
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 50 тыщ
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, любая сумма
  if(housingType.value === "flat" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "flat" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, до 10 тыщ.
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, до 10 тыщ.
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, до 10 тыщ.
  if(housingType.value === "flat" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "flat" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 10 до 50 тыщ.
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 10 до 50 тыщ.
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 10 до 50 тыщ.
  if(housingType.value === "flat" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "flat" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 50 тыщ.
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 50 тыщ.
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 50 тыщ.
  if(housingType.value === "flat" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "flat" && e.offer.rooms === 3;

    });
  }
    // 4 Отель
  // все гости, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel";

    });
  }
  // все гости, все комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel";

    });
  }
  // все гости, все комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel";

    });
  }
  // все гости, все комнаты, от любой суммы
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel";

    });
  }

  // 1 гость, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 0 гостей, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, до 10 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 50 тыщ
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, любая сумма
  if(housingType.value === "hotel" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "hotel" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, до 10 тыщ.
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, до 10 тыщ.
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, до 10 тыщ.
  if(housingType.value === "hotel" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "hotel" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 10 до 50 тыщ.
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 10 до 50 тыщ.
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 10 до 50 тыщ.
  if(housingType.value === "hotel" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "hotel" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 50 тыщ.
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 50 тыщ.
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 50 тыщ.
  if(housingType.value === "hotel" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "hotel" && e.offer.rooms === 3;

    });
  }
    // 5 Дом
  // все гости, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house";

    });
  }
  // все гости, все комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house";

    });
  }
  // все гости, все комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house";

    });
  }
  // все гости, все комнаты, от любой суммы
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house";

    });
  }

  // 1 гость, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house" && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 0 гостей, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, до 10 тыщ
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 50 тыщ
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house" && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house"
      && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, любая сумма
  if(housingType.value === "house" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.type === "house" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, до 10 тыщ.
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, до 10 тыщ.
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, до 10 тыщ.
  if(housingType.value === "house" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.type === "house" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 10 до 50 тыщ.
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 10 до 50 тыщ.
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 10 до 50 тыщ.
  if(housingType.value === "house" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.type === "house" && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 50 тыщ.
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house" && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 50 тыщ.
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house" && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 50 тыщ.
  if(housingType.value === "house" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.type === "house" && e.offer.rooms === 3;

    });
  }

    // 6 Все
  // все гости, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 10000 && e.offer.price < 50000;

    });
  }
  // все гости, все комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000;

    });
  }
  // все гости, все комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000;

    });
  }
  // все гости, все комнаты, от любой суммы
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "any"){
    usersFiltred = users;
  }

  // 1 гость, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 &&  e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }
  // 1 гость, все комнаты, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 1;

    });
  }
  // 1 гость, 1 комната, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 1 && e.offer.rooms === 1;

    });
  }
  // 1 гость, 2 комнаты, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 1 && e.offer.rooms === 2;

    });
  }
  // 1 гость, 3 комнаты, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "1"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 1 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 2 гостя, все комнаты, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 2;

    });
  }
    // 2 гостя, 1 комната, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 2 && e.offer.rooms === 1;

    });
  }
    // 2 гостя, 2 комнаты, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 2 && e.offer.rooms === 2;

    });
  }
    // 2 гостя, 3 комнаты, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "2"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 2 && e.offer.rooms === 3;

    });
  }

  // 0 гостей, все комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 10 до 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, до 10 тыщ
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 &&  e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, от 50 тыщ
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // 0 гостей, все комнаты, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "any" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 &&  e.offer.guests === 0;

    });
  }
  // 0 гостей, 1 комната, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 0 && e.offer.rooms === 1;

    });
  }
  // 0 гостей, 2 комнаты, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 0 && e.offer.rooms === 2;

    });
  }
  // 0 гостей, 3 комнаты, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "0"){
    usersFiltred = users.filter(function (e) {

      return e.offer.guests === 0 && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, любая сумма
  if(housingType.value === "any" && housingPrice.value === "any"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, до 10 тыщ.
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, до 10 тыщ.
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, до 10 тыщ.
  if(housingType.value === "any" && housingPrice.value === "low"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price < 10000 && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 10 до 50 тыщ.
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 10 до 50 тыщ.
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 10 до 50 тыщ.
  if(housingType.value === "any" && housingPrice.value === "middle"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return (e.offer.price > 10000 && e.offer.price < 50000) && e.offer.rooms === 3;

    });
  }
  // любое колв-о гостей, 1 комната, от 50 тыщ.
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "1" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.rooms === 1;

    });
  }
  // любое колв-о гостей, 2 комната, от 50 тыщ.
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "2" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000  && e.offer.rooms === 2;

    });
  }
  // любое колв-о гостей, 3 комната, от 50 тыщ.
  if(housingType.value === "any" && housingPrice.value === "high"
    && housingRooms.value === "3" && housingGuests.value === "any"){
    usersFiltred = users.filter(function (e) {

      return e.offer.price > 50000 && e.offer.rooms === 3;

    });
  }
    return usersFiltred;
  };

export { getUsersAll, usersFiltred };
