import { createCustomPopup } from './card.js';

import {
  housingPrice, housingType, housingRooms, housingGuests, housingFeatures,
  conditionerFilter, elevatorFilter, washerFilter, parkingFilter,
  dishwasherFilter, wifiFilter, housingGuestsFilter,
  housingRoomsFilter, housingPriceFilter,housingTypeFilter
} from './filter.js';

import{ getData } from './api.js';

import{ title, features, capacity, roomNumber, typeHousing, price, timein, timeout, description } from './form.js';

const address = document.getElementById('address');

const mapFilters = document.querySelector('.map__filters');

const adForm = document.querySelector('.ad-form');

const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');

const fieldset = adForm.querySelectorAll('fieldset');

const reset = document.querySelector('.ad-form__reset');

mapFilters.classList.add('map__filters--disabled');

adForm.classList.add('ad-form--disabled');

mapFiltersElements.forEach((user) => {
  user.setAttribute('disabled', 'disabled');

});

fieldset.forEach((user) => {
  user.setAttribute('disabled', 'disabled');

});

const mapFeatures = mapFilters.querySelector('.map__features');

mapFeatures.setAttribute('disabled', 'disabled');


const map = L.map('map-canvas')
  .on('load', () => {
    mapFilters.classList.remove('map__filters--disabled');

    adForm.classList.remove('ad-form--disabled');

    mapFiltersElements.forEach((user) => {
      user.removeAttribute('disabled', 'disabled');

    });

    fieldset.forEach((user) => {
      user.removeAttribute('disabled', 'disabled');

    });

    mapFeatures.removeAttribute('disabled', 'disabled');

  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,

  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();

  address.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;

});

address.value = `${mainPinMarker.getLatLng().lat.toFixed(5)}, ${mainPinMarker.getLatLng().lng.toFixed(5)}`;

function debounce( callback, delay ) {
  let time;

  return function() {

    clearTimeout( time );

    time = setTimeout( callback, delay );
  };
}


const markerGroup = L.layerGroup().addTo(map);

getData((ads) => {
  ads
    .slice(0, 10)
    .forEach((user) => {

      const marker = L.marker({
        lat:user.location.lat,
        lng:user.location.lng,
      });

      marker
        .addTo(markerGroup)
        .bindPopup(
          createCustomPopup(user),
          {
            keepInView: true,
          },
        );
    });

  mapFilters.addEventListener('input', () => {

    markerGroup.clearLayers();

    ads
      .filter(housingTypeFilter)
      .filter(housingPriceFilter)
      .filter(housingRoomsFilter)
      .filter(housingGuestsFilter)
      .filter(wifiFilter)
      .filter(dishwasherFilter)
      .filter(parkingFilter)
      .filter(washerFilter)
      .filter(elevatorFilter)
      .filter(conditionerFilter)
      .slice(0, 10)
      .forEach((user) => {

        const marker = L.marker({
          lat:user.location.lat,
          lng:user.location.lng,
        });

        debounce(
          marker
            .addTo(markerGroup)
            .bindPopup(
              createCustomPopup(user),
              {
                keepInView: true,
              },
            ),2500);
      });
  });

});

const resetForm = (evt) => {

  evt.preventDefault();

  mainPinMarker.setLatLng({
    lat: 35.68950,
    lng: 139.69171,
  });

  address.value = `${mainPinMarker.getLatLng().lat.toFixed(5)}, ${mainPinMarker.getLatLng().lng.toFixed(5)}`;

  title.value = title.defaultValue;

  capacity.value = 1;

  roomNumber.value = 1;

  typeHousing.value = 'flat';

  price.value = price.defaultValue;

  price.placeholder = 1000;

  timein.value = '12:00';

  timeout.value = '12:00';

  description.value = description.defaultValue;

  features.forEach((elem) => {
    elem.checked = false;
  });

  housingPrice.value = 'any';

  housingType.value = 'any';

  housingRooms.value = 'any';

  housingGuests.value = 'any';

  housingFeatures.forEach((elem) => {
    elem.checked = false;
  });

  markerGroup.clearLayers();

  map.setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 12);

  getData((ads) => {
    ads
      .slice(0, 10)
      .forEach((user) => {

        const marker = L.marker({
          lat:user.location.lat,
          lng:user.location.lng,
        });

        marker
          .addTo(markerGroup)
          .bindPopup(
            createCustomPopup(user),
            {
              keepInView: true,
            },
          );
      });
  });
};

reset.addEventListener('click', resetForm);

export {reset, resetForm, address, mainPinMarker};
