import containers from '../assets/images/map/containers-s.png';
import {LatLngExpression} from 'leaflet';
import recycle from '../assets/images/home/recycle.png';
import plastic from '../assets/images/home/plastic.png';
import mask from '../assets/images/home/masks.png';
import map from '../assets/images/home/map.png';
import market from '../assets/images/home/market.png';
import {IMarketCard} from '../components/MarketCard/MarketCard';
import image1 from '../assets/images/market/image1.png';
import image2 from '../assets/images/market/image2.png';
import image3 from '../assets/images/market/image3.png';
import image4 from '../assets/images/market/image4.png';
import image5 from '../assets/images/market/image5.png';

export const PHONE_NUMBER = '88888888888';
export const PASSWORD = 'password';
export const CODE = '3153';
export const EMAIL = 'company@mail.ru';
export const BRANDS = [
  'all',
  'HM',
  'PB',
  'Adidas',
  'Nike',
  'Reebok',
  'BOSS',
  'Guess',
  'Moschino',
  'DKNY',
  'Versace',
  'Versus'
];
export const TYPES = [
  'all',
  'wear',
  'shoes',
  'accessories'
];
export const SHOPS = [
  'all',
  'HM',
  'PB',
  'Adidas',
  'Nike',
  'Reebok'
];
export const MATERIALS = [
  'all',
  'shoes',
  'old_wear',
  'glass',
  'paper',
  'metal',
  'accum'
];

export const API_URL = 'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1';

export const cards = [
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторыdsadsadsadsadas',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Стекло, бумага, металл, старая одежда, батареи',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Стекло, бумага, металл, старая одежда, батареи',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторыkkadskkadskdasl',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл',
    img: containers
  },
  {
    address: 'ул.Кремлёвская, 88',
    text: 'Пластик, стекло, бумага, металл',
    img: containers
  },
];

export const startPosition: LatLngExpression = [55.7887, 49.1221];

export const slides = [
  {
    title: 'Сделаем мир чище',
    subtitle: 'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: recycle,
  },
  {
    title: 'А вы знали...',
    subtitle: 'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: plastic,
  },
  {
    title: 'Что с масками?',
    subtitle: 'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: mask,
  },
];

export const homeCards = [
  {
    title: 'Пункты сбора',
    subtitle: 'Посмотри, где в твоем городе можно сдать вторсырье на переработку',
    link: 'map',
    image: map
  },
  {
    title: 'ЭкоМаркет',
    subtitle: 'Используй заработанные экокоины для покупки товаров из переработанных материалов',
    link: 'market',
    image: market
  }
];

export const shopsOptions = [
  {
    text: 'Выбрать все',
    value: 'all'
  },
  {
    text: 'H&M',
    value: 'HM'
  },
  {
    text: 'P&B',
    value: 'PB'
  },
  {
    text: 'Adidas',
    value: 'Adidas'
  },
  {
    text: 'Nike',
    value: 'Nike'
  },
  {
    text: 'Reebok',
    value: 'Reebok'
  },
];

export const materialsOptions = [
  {
    text: 'Выбрать все',
    value: 'all'
  },
  {
    text: 'Обувь',
    value: 'shoes'
  },
  {
    text: 'Старая одежда',
    value: 'old_wear'
  },
  {
    text: 'Стекло',
    value: 'glass'
  },
  {
    text: 'Бумага',
    value: 'paper'
  },
  {
    text: 'Металл',
    value: 'metal'
  },
  {
    text: 'Батареика',
    value: 'accum'
  },
];

export const marketCards: IMarketCard[] = [
  {
    name: 'Nike Air Max 2021',
    category: 'Мужская обувь',
    brand: 'NIKE',
    price: 1000,
    image: image1
  },
  {
    name: 'Nike Air Max 90 Premium',
    category: 'Мужская обувь',
    brand: 'NIKE',
    price: 750,
    image: image2
  },
  {
    name: 'Adidas Alphabounce RC',
    category: 'Мужская обувь',
    brand: 'Adidas',
    price: 1200,
    image: image3
  },
  {
    name: 'Nike Air Max 2021',
    category: 'Мужская обувь',
    brand: 'H&M',
    price: 1000,
    image: image4
  },
  {
    name: 'Nike Air Force 1 Low',
    category: 'Мужская обувь',
    brand: 'NIKE',
    price: 2100,
    image: image5
  },
];
