import { users } from './data.js';

import { createCustomPopup } from './card.js';

import { getUsersAll, usersFiltred } from './filter.js';

const mapFilters = document.querySelector('.map__filters');

const adForm = document.querySelector('.ad-form');

const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');

const fieldset = adForm.querySelectorAll('fieldset');

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

    const mapFeatures = mapFilters.querySelector('.map__features');

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

const markerGroup = L.layerGroup().addTo(map);

users.forEach((user) => {

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

const map2Filters = document.querySelector('.map__filters');

map2Filters.addEventListener('input', () => {

  getUsersAll(usersFiltred);

  markerGroup.clearLayers();

  usersFiltred.forEach((user) => {

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
