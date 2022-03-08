const TITLES = [
  'Скромная квартира',
  'Роскошная квартира',
  'Апартаменты',
  'Хибара',
  'Сарай',
  'Квартира',
  'Дом',
  'Гараж',
  'Ангар',
  'Хостел',
  'Стойло',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Просторная квартира со стульями',
  'Уютные комнаты',
  'Светлая и чистая',
  'Просторный балкон',
  'Кладовка включена',
  'Потолки высокие',
  'Фото-обои на стенах',
  'Всюду ковры и чучела',
  'Большой телевизор и своя стиральная машина',
  'До метро 5 минут',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const advertisementList = [];

function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomFloatingInteger(min, max, count) {
  const rand = min + Math.random() * (max - min);
  const clippedInteger = rand.toFixed(count);
  return Number(clippedInteger);
}

function getRandomValue(arr) {
  return arr[getRandomInteger(0, arr.length - 1)];
}

function getClippedArray(arr) {
  const count = getRandomInteger(1, arr.length);
  const copyArr = arr.slice();
  const result = [];

  for (let i = count; i > 0; i--) {
    const indexOfElement = getRandomInteger(0, copyArr.length - 1);
    const splicedElement = copyArr.splice(indexOfElement, 1);
    result.push(splicedElement[0]);
  }

  return result;
}

function getImageNumber(digit) {
  return digit < 10 ? `0${digit}` : `${digit}`;
}

getRandomInteger(1, 7);
getRandomFloatingInteger(2, 9, 10);

function createAdvertisement(number, lat, lng) {
  return {
    author: {
      avatar: `img/avatars/user${getImageNumber(number + 1)}.png`,
    },
    offer: {
      title: TITLES[number],
      address: `${lat}, ${lng}`,
      price: getRandomInteger(1, 1000),
      type: getRandomValue(TYPES),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 15),
      checkin: `${getRandomValue([12, 13, 14])  }:00`,
      checkout: `${getRandomValue([12, 13, 14])  }:00`,
      features: getClippedArray(FEATURES),
      description: DESCRIPTIONS[number],
      photos: getClippedArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
}

for (let i = 0; i < 10; i++) {
  const lat = getRandomFloatingInteger(35.65, 35.7, 5);
  const lng = getRandomFloatingInteger(139.7, 139.8, 5);

  advertisementList.push(createAdvertisement(i, lat, lng));
}
