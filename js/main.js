import {getRandomInteger, getRandomArrayElement, createNumber} from './utils.js';

const TITLES = [
  'Просторная квартира',
  'Отель 5 звезд',
  'Недорогая каморка',
  'Отель для лентяев',
  'Квартира с тараканами',
  'Хостел у метро',
  'Апартаменты для приезжих',
  'Бунгало',
  'Деревянный сарай',
  'Дом на колесах'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow ',
  'hotel'
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'Романтичный отель для влюбленных',
  'Апартаменты со всем необоходимым для жизни',
  'Квартира с красивым дизайном',
  'Вид из окна на горы',
  'Уютное место для отдыха',
  'Таких цен вы нигде не видели',
  'Сдается квартира с котом',
  'Только некурящим',
  'В доме нет лифта',
  'В квартире живут тараканы'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

//массив случайной длины из неповторяющихся значений
const createFeatures = () => {
  const features = Array.from({length: getRandomInteger(1, 6)}, () => getRandomArrayElement(FEATURES));
  return [...new Set(features)].join(' ');
};

const advert = {
  autor: {
    avatar: `img/avatars/user${createNumber(getRandomInteger(1, 10), 2, 0)}.png`,
  },
  offer: {
    title: getRandomArrayElement(TITLES),
    //address: {{location.lat}}, {{location.lng}},
    price: getRandomInteger(1000, 10000),
    type: String(getRandomArrayElement(TYPES)),
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 10),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: createFeatures(),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomArrayElement(PHOTOS)
  },
  location: null
};
