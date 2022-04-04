import {createCard} from './createCard.js';

const MAIN_PIN = {
  iconUrl: './img/main-pin.svg',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
};

const PIN = {
  iconUrl: './img/pin.svg',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
};

const DEFAULT_MAP_CENTER = {
  lat: 35.68108,
  lng: 139.76179,
};

const DEFAULT_MAP_ZOOM = 13;

const TILE_LAYER_IMAGE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const TILE_LAYER_OPTIONS = {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const setAddress = ({lat, lng}) => {
  const addressInput = document.querySelector('#address');
  const fixLan = lat.toFixed(5);
  const fixLng = lng.toFixed(5);

  addressInput.value = `${fixLan}, ${fixLng}`;
};

const createMarker = (point, layer, icon) => {
  const {lat, lng} = point.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(layer)
    .bindPopup(createCard(point));
};

export {
  MAIN_PIN,
  PIN,
  DEFAULT_MAP_CENTER,
  DEFAULT_MAP_ZOOM,
  TILE_LAYER_IMAGE,
  TILE_LAYER_OPTIONS,
  setAddress,
  createMarker,
};
