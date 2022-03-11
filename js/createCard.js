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

const createCard = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);
  const featureElementList = cardElement.querySelector('.popup__features');
  const featureList = getFeatureList(offer.features, featureElementList);
  const photoElementList = cardElement.querySelector('.popup__photos');
  const photoElement = photoElementList.querySelector('.popup__photo');
  const photoList = getImageList(offer.photos, photoElement);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = propertyTypes[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  featureElementList.innerHTML = '';
  featureElementList.append(featureList);
  cardElement.querySelector('.popup__description').textContent = offer.description;
  photoElementList.innerHTML = '';
  photoElementList.append(photoList);
  cardElement.querySelector('.popup__avatar').src = author.avatar;

  return cardElement;
};

export {createCard};
