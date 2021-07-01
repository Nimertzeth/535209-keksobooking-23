const mapDisabled = 1;

const mapFilters = document.querySelector('.map__filters');

const adForm = document.querySelector('.ad-form');

const mapFiltersElements = mapFilters.querySelectorAll('.map__filter');

const fieldset = adForm.querySelectorAll('fieldset');

if (mapDisabled === 1){
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

}
