const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const propertyTypes = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

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

const dataCheck = (element, data, string) => {
  if (Array.isArray(data) && data.every((el) => el)) {
    element.textContent = string;
  } else if (data) {
    element.textContent = string || data;
  } else {
    element.classList.add('hidden');
  }
};

const createCard = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);
  const featureElementList = cardElement.querySelector('.popup__features');
  const featureList = getFeatureList(offer.features, featureElementList);
  const photoElementList = cardElement.querySelector('.popup__photos');
  const photoElement = photoElementList.querySelector('.popup__photo');
  const photoList = getImageList(offer.photos, photoElement);

  dataCheck(cardElement.querySelector('.popup__title'), offer.title);
  dataCheck(cardElement.querySelector('.popup__text--address'), offer.address);
  dataCheck(cardElement.querySelector('.popup__text--price'), offer.price, `${offer.price} ₽/ночь`);
  dataCheck(cardElement.querySelector('.popup__type'), offer.type, propertyTypes[offer.type]);
  dataCheck(cardElement.querySelector('.popup__text--capacity'), [offer.rooms, offer.guests], `${offer.rooms} комнаты для ${offer.guests} гостей`);
  dataCheck(cardElement.querySelector('.popup__text--time'), [offer.checkin, offer.checkout], `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);

  featureElementList.innerHTML = '';
  featureElementList.append(featureList);
  dataCheck(cardElement.querySelector('.popup__description'), offer.description);
  photoElementList.innerHTML = '';
  photoElementList.append(photoList);
  dataCheck(cardElement.querySelector('.popup__avatar'), author.avatar);

  return cardElement;
};

export {createCard};
