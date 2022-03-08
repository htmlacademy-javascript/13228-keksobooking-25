const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomFloatingInteger = (min, max, count) => {
  const rand = min + Math.random() * (max - min);
  const clippedInteger = rand.toFixed(count);
  return Number(clippedInteger);
};

const getRandomValue = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const getClippedArray = (arr) => {
  const count = getRandomInteger(1, arr.length);
  const copyArr = arr.slice();
  const result = [];

  for (let i = count; i > 0; i--) {
    const indexOfElement = getRandomInteger(0, copyArr.length - 1);
    const splicedElement = copyArr.splice(indexOfElement, 1);
    result.push(splicedElement[0]);
  }

  return result;
};

const getImageNumber = (digit) => digit < 10 ? `0${digit}` : `${digit}`;

export {getRandomInteger, getRandomFloatingInteger, getRandomValue, getClippedArray, getImageNumber};
