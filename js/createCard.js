import {PROPERTY_TYPES} from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const getFeatureList = (features, featureElementList) => {
  const featureFragment = document.createDocumentFragment();

  features.forEach((feature) => {
    const featureItem = featureElementList.querySelector(`.popup__feature--${  feature}`);

    if (featureItem) {
      featureFragment.append(featureItem);
    }
  });

  return featureFragment;
};

const getImageList = (photos, photoElement) => {
  const photoFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const cloneImage = photoElement.cloneNode(true);
    cloneImage.src = photo;
    photoFragment.append(cloneImage);
  });

  return photoFragment;
};

const createCard = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);
  const featureElementList = cardElement.querySelector('.popup__features');
  const featureList = getFeatureList(offer.features, featureElementList);
  const photoElementList = cardElement.querySelector('.popup__photos');
  const photoElement = photoElementList.querySelector('.popup__photo');
  const photoList = getImageList(offer.photos, photoElement);
  const addText = (element, text) => {
    cardElement.querySelector(`.popup__${element}`).textContent = text;
  };
  const hideElement = (nameOfClass) => {
    cardElement.querySelector(`.popup__${nameOfClass}`).classList.add('hidden');
  };

  if (offer.title) {
    addText('title', offer.title);
  } else {
    hideElement('title');
  }

  if (offer.address) {
    addText('text--address', offer.address);
  } else {
    hideElement('text--address');
  }

  if (offer.price) {
    addText('text--price', `${offer.price} ₽/ночь`);
  } else {
    hideElement('text--price');
  }

  if (offer.type) {
    addText('type', PROPERTY_TYPES[offer.type]);
  } else {
    hideElement('type');
  }

  if (offer.rooms && offer.guests) {
    addText('text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  } else {
    hideElement('text--capacity');
  }

  if (offer.checkin && offer.checkout) {
    addText('text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  } else {
    hideElement('text--time');
  }

  if (featureList.querySelectorAll('.popup__feature').length) {
    featureElementList.innerHTML = '';
    featureElementList.append(featureList);
  } else {
    featureElementList.classList.add('hidden');
  }

  if (offer.description) {
    addText('description', offer.description);
  } else {
    hideElement('description');
  }

  if (photoList.querySelectorAll('.popup__photo').length) {
    photoElementList.innerHTML = '';
    photoElementList.append(photoList);
  } else {
    photoElementList.classList.add('hidden');
  }

  if (author.avatar) {
    cardElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    hideElement('avatar');
  }

  return cardElement;
};

export {createCard};
