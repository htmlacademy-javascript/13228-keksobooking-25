function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomFloatingInteger(min, max, count) {
  const rand = min + Math.random() * (max - min);
  return rand.toFixed(count);
}

function getRandomValue(arr) {
  return arr[getRandomInteger(0, arr.length - 1)];
}

function gerClippedArray(arr) {
  return arr.slice(arr.length - getRandomInteger(1, arr.length));
}

const TITLES = [
  'Скромная квартира',
  'Роскошная квартира',
  'Аппартоменты',
  'Хибара',
  'Сарай',
  'Квартира',
  'Дом',
  'Гараж',
  'Ангар',
  'Хостел',
  'Стойло',
];

const IMG_NUMBERS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
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
  'Большой телевизор и своя стиралная машина',
  'До метро 5 минут',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

getRandomInteger(1, 7);
getRandomFloatingInteger(2, 9, 10);

function createAdvertisement(number, lat, lng) {
  return {
    author: {
      avatar: `img/avatars/user${IMG_NUMBERS[number]}.png`,
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
      features: gerClippedArray(FEATURES),
      description: DESCRIPTIONS[number],
      photos: gerClippedArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
}

const advertisementList = [];

for (let i = 0; i < 10; i++) {
  const lat = getRandomFloatingInteger(35.65, 35.7, 5);
  const lng = getRandomFloatingInteger(139.7, 139.8, 5);

  advertisementList.push(createAdvertisement(i, lat, lng));
}
