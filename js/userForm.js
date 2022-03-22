const form = document.querySelector('.ad-form');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

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

const getCapacityErrorMessage = () => {
  const numberOfCapacity = Number(capacity.value);
  const numberOfRoom = Number(roomNumber.value);

  if (numberOfRoom < 100 && numberOfRoom < numberOfCapacity) {
    return 'Столько людей не влезет';
  }

  if (numberOfRoom < 100 && numberOfCapacity === 0) {
    return 'Нужно выбрать количество гостей';
  }

  return 'Только не для гостей';
};

pristine.addValidator(
  roomNumber,
  validateCapacity,
  getCapacityErrorMessage
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
