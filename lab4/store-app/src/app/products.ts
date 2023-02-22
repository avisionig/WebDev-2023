export interface Product {
  rating: number;
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy A23',
    price: 235,
    description: 'Discover more possibilities. Get everything at once. Galaxy A23\'s 6.6-inch V-notch TFT display lets you see and do more.',
    rating: 4,
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item'
  },
  {
    id: 5,
    name: 'Apple iPhone 13',
    price: 840,
    description: 'Apple iPhone 13 features a 6.1-inch Super Retina XDR display with incredibly high pixel density - photos.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item'
  },
  {
    id: 2,
    name: 'Apple iPhone 11',
    price: 660,
    description: 'The functional and stylish smartphone Apple iPhone 11 in a metal case is able to provide not only everyday communication and entertainment, but also productive work.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item'
  },
  {
    id: 6,
    name: 'Samsung Galaxy Z Fold4',
    price :2460 ,
    description: 'The elegant combination of a unique form factor and natural classic shades draws attention every time you open it.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-512-gb-chernyi-podarok-106036420/?c=750000000#!/item'
  },
  {
    id: 3,
    name: 'Xiaomi Redmi Note 11 Pro',
    price: 310,
    description: 'Super high refresh rate. A high refresh rate of 120Hz ensures smooth operation and rich image details when browsing the web.',
    rating: 4,
    link:'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item'
  },
  {
    id: 4,
    name:'Apple iPhone 14 Pro Max',
    price:1590,
    description: '256Gb purple',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item'
  },
  {
    id:7,
    name: ' God of War Ragnarök PS5',
    price: 70,
    description: 'God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/god-of-war-ragnar-k-ps5-106671793/?c=750000000#!/item'
  },
  {
    id: 8,
    name: 'Яблоко Американка',
    price:1.5,
    description: 'type of fruit: apple\n' +
        'variety: stone fruit\n' +
        'type: american\n' +
        'country of production: Kazakhstan.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/magnum-jabloko-amerikanka-kazahstan-102382796/?c=750000000#!/item'
  },
  {
    id: 9,
    name:'Elit Stol Кубик',
    price: 20,
    description: 'Pouffe "Cube" will be a practical addition to any room in your home: hallway, bedroom, living room or kitchen.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/elit-stol-kubik-001-ldsp-derevo-37x37x41-sm-belyi-106371646/?c=750000000#!/item'
  },
  {
    id: 10,
    name: 'Карты таро Манара',
    price: 12,
    description: 'An acclaimed master of erotic drawing, Milo Manara takes us to a dreamlike yet carnal dimension that he brings to life.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/karty-taro-manara-78-kart-na-angliiskom-s-onlain-instruktsiei-103045645/?c=750000000#!/item'
  }
];

