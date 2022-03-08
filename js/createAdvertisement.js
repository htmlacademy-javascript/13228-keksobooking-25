import {getRandomInteger, getRandomValue, getClippedArray, getImageNumber} from './utils.js';
import {TITLES, TYPES, FEATURES, DESCRIPTIONS, PHOTOS} from './data.js';

const createAdvertisement = (number, lat, lng) => ({
  author: {
    avatar: `img/avatars/user${getImageNumber(number + 1)}.png`,
  },
  offer: {
    title: TITLES[number],
    address: `${lat}, ${lng}`,
    price: getRandomInteger(1, 1000),
    type: getRandomValue(TYPES),
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 15),
    checkin: `${getRandomValue([12, 13, 14])  }:00`,
    checkout: `${getRandomValue([12, 13, 14])  }:00`,
    features: getClippedArray(FEATURES),
    description: DESCRIPTIONS[number],
    photos: getClippedArray(PHOTOS),
  },
  location: {
    lat: lat,
    lng: lng,
  },
});

export {createAdvertisement};
