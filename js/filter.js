const housingPrice = document.getElementById('housing-price');

const housingType = document.getElementById('housing-type');

const housingRooms = document.getElementById('housing-rooms');

const housingGuests = document.getElementById('housing-guests');

const housingFeatures = document.querySelectorAll('.map__checkbox');

const housingFeaturesWifi = document.getElementById('filter-wifi');

const housingFeaturesDishwasher = document.getElementById('filter-dishwasher');

const housingFeaturesParking = document.getElementById('filter-parking');

const housingFeaturesWasher = document.getElementById('filter-washer');

const housingFeaturesElevator = document.getElementById('filter-elevator');

const housingFeaturesConditioner = document.getElementById('filter-conditioner');

const translatePrices = {
  low:{
    from: 0,
    to: 10000,
  },
  middle:{
    from: 10000,
    to: 50000,
  },
  high:{
    from: 50000,
    to: Infinity,
  },
  any:{
    from: 0,
    to: Infinity,
  },

};

const translateRooms = {
  1:'1',
  2:'2',
  3:'3',
};

const translateGuests = {
  1:'1',
  2:'2',
  0:'0',
};

const housingTypeFilter = (item) => {
  if(housingType.value === 'any'){

    return true;
  }

  return housingType.value === item.offer.type;
};

const housingPriceFilter = (item) => translatePrices[housingPrice.value].from <= item.offer.price
  && translatePrices[housingPrice.value].to > item.offer.price;

const housingRoomsFilter = (item) => {
  if(housingRooms.value === 'any'){

    return true;
  }

  return housingRooms.value === translateRooms[item.offer.rooms];
};

const housingGuestsFilter = (item) => {
  if(housingGuests.value === 'any'){

    return true;
  }

  return housingGuests.value === translateGuests[item.offer.guests];
};

const wifiFilter = (item) => {
  if( item.offer.features ){
    if(housingFeaturesWifi.checked){

      return item.offer.features.includes('wifi');
    }

    return true;
  }
};
const dishwasherFilter = (item) => {
  if( item.offer.features ){
    if(housingFeaturesDishwasher.checked){

      return item.offer.features.includes('dishwasher');
    }

    return true;
  }
};

const parkingFilter = (item) => {
  if( item.offer.features ){
    if(housingFeaturesParking.checked){

      return item.offer.features.includes('parking');
    }

    return true;
  }
};

const washerFilter = (item) => {
  if( item.offer.features ){
    if(housingFeaturesWasher.checked){

      return item.offer.features.includes('washer');
    }

    return true;
  }
};

const elevatorFilter = (item) => {
  if( item.offer.features ){
    if(housingFeaturesElevator.checked){

      return item.offer.features.includes('elevator');
    }

    return true;
  }
};

const conditionerFilter = (item) => {
  if( item.offer.features ){
    if(housingFeaturesConditioner.checked){

      return item.offer.features.includes('conditioner');
    }

    return true;
  }
};

export {
  housingPrice, housingType, housingRooms, housingGuests, housingFeatures,
  conditionerFilter, elevatorFilter, washerFilter, parkingFilter,
  dishwasherFilter, wifiFilter, housingGuestsFilter,
  housingRoomsFilter, housingPriceFilter,housingTypeFilter
};
