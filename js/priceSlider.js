const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 0,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return value;
      },
    },
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
  });
};

const updatePrice = (minPrice) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: Number(minPrice),
      max: 100000,
    }
  });
  sliderElement.noUiSlider.set(Number(minPrice));
};

const updateValue = (value) => {
  sliderElement.noUiSlider.set(Number(value));
};

export {createSlider, updatePrice, updateValue};
