import {getRandomFloatingInteger} from './utils.js';
import {createAdvertisement} from './createAdvertisement.js';
import {createCard} from './createCard.js';
import {switchToInactiveState, switchToActiveState} from './managingFormStates.js';

const advertisementList = [];

for (let i = 0; i < 10; i++) {
  const lat = getRandomFloatingInteger(35.65, 35.7, 5);
  const lng = getRandomFloatingInteger(139.7, 139.8, 5);

  advertisementList.push(createAdvertisement(i, lat, lng));
}

const map = document.querySelector('#map-canvas');
const card = createCard(advertisementList[0]);

map.append(card);

switchToInactiveState();
switchToActiveState();
