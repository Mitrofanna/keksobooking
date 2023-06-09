const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createNumber = (number, length, symbols) => {
  while(number.length < length) {
    number = symbols.slice(0, length - number.length) + number;
  }
  return number;
};

export {getRandomInteger, getRandomArrayElement, createNumber};

