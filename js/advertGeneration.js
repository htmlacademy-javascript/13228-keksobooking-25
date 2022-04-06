import {getRandomFloatingInteger} from './utils.js';
import {createAdvertisement} from './createAdvertisement.js';

const getAdvertisementList = () => {
  const advertisementList = [];

  for (let i = 0; i < 10; i++) {
    const lat = getRandomFloatingInteger(35.65, 35.7, 5);
    const lng = getRandomFloatingInteger(139.7, 139.8, 5);

    advertisementList.push(createAdvertisement(i, lat, lng));
  }

  return advertisementList;
};

export {getAdvertisementList};
