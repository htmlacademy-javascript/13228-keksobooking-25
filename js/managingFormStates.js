const form = document.querySelector('.ad-form');
const fieldsetList = document.querySelectorAll('fieldset');
const filter = document.querySelector('.map__filters');
const filterSelectList = document.querySelectorAll('select');
const filterFieldset = document.querySelector('fieldset');

const switchToInactiveState = () => {
  form.classList.add('ad-form--disabled');
  fieldsetList.forEach((fieldset) => {
    fieldset.setAttribute('disabled', 'disabled');
  });
  filter.classList.add('map__filters--disabled');
  filterSelectList.forEach((select) => {
    select.setAttribute('disabled', 'disabled');
  });
  filterFieldset.setAttribute('disabled', 'disabled');
};

const switchToActiveState = () => {
  form.classList.remove('ad-form--disabled');
  fieldsetList.forEach((fieldset) => {
    fieldset.removeAttribute('disabled');
  });
  filter.classList.remove('map__filters--disabled');
  filterSelectList.forEach((select) => {
    select.removeAttribute('disabled');
  });
  filterFieldset.removeAttribute('disabled');
};

export {
  switchToInactiveState,
  switchToActiveState
};
