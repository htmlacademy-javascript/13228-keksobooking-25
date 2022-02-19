function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomFloatingInteger(min, max, count) {
  const rand = min + Math.random() * (max - min);
  return rand.toFixed(count);
}

getRandomInteger(1, 7);
getRandomFloatingInteger(2, 9, 10);
