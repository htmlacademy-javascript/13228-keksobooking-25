import {PROPERTY_MIN_PRICE} from './data.js';
import {createSlider, updatePrice, updateValue} from './priceSlider.js';
createSlider();

const form = document.querySelector('.ad-form');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const typeOfHousing = form.querySelector('#type');
const price = form.querySelector('#price');
const timeField = form.querySelector('.ad-form__element--time');
const timeSelects = timeField.querySelectorAll('select');

price.addEventListener('change', (evt) => {
  updateValue(evt.target.value);
});

const setMinPrice = (minPrice) => {
  price.setAttribute('placeholder', minPrice);
  price.setAttribute('data-min-price', minPrice);
  updatePrice(minPrice);
};

const setTime = (typeOfSelect, index) => {
  const targetSelectId = typeOfSelect === 'timein' ? '#timeout' : '#timein';
  timeField.querySelector(targetSelectId).selectedIndex = index;
};

setMinPrice(PROPERTY_MIN_PRICE[typeOfHousing.value]);

typeOfHousing.addEventListener('change', (evt) => {
  setMinPrice(PROPERTY_MIN_PRICE[evt.target.value]);
});

timeSelects.forEach((select) => {
  select.addEventListener('change', (evt) => {
    const selectId = evt.target.id;
    const selectIndex = evt.target.selectedIndex;

    setTime(selectId, selectIndex);
  });
});

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);

const validateCapacity = (countOfRoom) => {
  const numberOfCapacity = Number(capacity.value);
  const numberOfRoom = Number(countOfRoom);

  if (numberOfRoom < 100) {
    return numberOfRoom >= numberOfCapacity && numberOfCapacity !== 0;
  }

  return numberOfCapacity === 0;
};

const validatePrice = () => {
  const currentPrice = price.value;
  const minPrice = Number(price.dataset.minPrice);
  const maxPrice = Number(price.dataset.maxPrice);

  return currentPrice && currentPrice <= maxPrice && currentPrice >= minPrice;
};

const getCapacityErrorMessage = () => {
  const numberOfCapacity = Number(capacity.value);
  const numberOfRoom = Number(roomNumber.value);

  if (numberOfRoom < 100 && numberOfRoom < numberOfCapacity) {
    return '?????????????? ?????????? ???? ????????????';
  }

  if (numberOfRoom < 100 && numberOfCapacity === 0) {
    return '?????????? ?????????????? ???????????????????? ????????????';
  }

  return '???????????? ???? ?????? ????????????';
};

const getPriceErrorMessage = () => {
  const currentPrice = price.value;
  const minPrice = Number(price.dataset.minPrice);

  if (!currentPrice) {
    return '???????????????????????? ?????????????????? ????????';
  }

  if (currentPrice < minPrice) {
    return `?????????????????????? ???????????????? ??? ${minPrice}`;
  }

  return '???????????????????????? ???????????????? ??? 100 000';
};

pristine.addValidator(
  roomNumber,
  validateCapacity,
  getCapacityErrorMessage
);

pristine.addValidator(
  price,
  validatePrice,
  getPriceErrorMessage
);

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
  }
});
