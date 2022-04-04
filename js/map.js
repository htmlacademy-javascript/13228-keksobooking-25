import {getAdvertisementList} from './advertGeneration.js';
import {switchToActiveState, switchToInactiveState} from './managingFormStates.js';
import {
  MAIN_PIN,
  PIN,
  DEFAULT_MAP_CENTER,
  DEFAULT_MAP_ZOOM,
  TILE_LAYER_IMAGE,
  TILE_LAYER_OPTIONS,
  setAddress,
  createMarker
} from './mapHelpers.js';

switchToInactiveState();

const map = L.map('map-canvas')
  .on('load', () => {
    switchToActiveState();
  })
  .setView(DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM);

L.tileLayer(TILE_LAYER_IMAGE, TILE_LAYER_OPTIONS).addTo(map);

const mainPinIcon = L.icon(MAIN_PIN);
const mainMarker = L.marker(
  DEFAULT_MAP_CENTER,
  {draggable: true, icon: mainPinIcon}
);

mainMarker.addTo(map);
mainMarker.on('moveend', ({target}) => {
  setAddress(target.getLatLng());
});

const markerGroup = L.layerGroup().addTo(map);
const pinIcon = L.icon(PIN);
const advertisementList = getAdvertisementList();

advertisementList.forEach((advert) => {
  createMarker(advert, markerGroup, pinIcon);
});
