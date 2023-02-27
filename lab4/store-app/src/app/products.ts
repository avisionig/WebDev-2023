export class Product {
  static idNum = 1;
  category: string;
  img: string;
  id: number;
  rating: number;
  name: string;
  price: number;
  description: string;
  link: string;
  constructor(rating : number, name: string, price: number, description: string, link: string, img:string, category: string) {
    this.rating = rating;
    this.name = name;
    this.price = price;
    this.description = description;
    this.link = link;
    this.id = Product.idNum++;
    this.category = category;
    this.img = img;
  }
}
export let products = new Array<Product>();

const prods = [
  {
    name: 'Samsung Galaxy A23',
    price: 235,
    description: 'Discover more possibilities. Get everything at once. Galaxy A23\'s 6.6-inch V-notch TFT display lets you see and do more.',
    rating: 4,
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    category:'Phone'
  },
  {
    name: 'Mortal Kombat 11',
    price: 31,
    description: 'Ultimate Edition, For PS5 by Warner Bros. Interactive Entertainment',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/mortal-kombat-11-ultimate-ps5-101097759/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/heb/33986331901982/mortal-kombat-11-ultimate-ps5-101097759-1-Container.jpg',
    category: 'Game'
  },
  {
    name: 'Apple iPhone 11',
    price: 660,
    description: 'The functional and stylish smartphone Apple iPhone 11 in a metal case is able to provide not only everyday communication and entertainment, but also productive work.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    category: 'Phone'
  },
  {
    name: 'Craft Cheese',
    price: 30,
    description: 'Ассорти твердых сыров 30%, 1000гр',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/syr-craft-cheese-tverdyi-assorti-30-1000-g-105184847/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h72/51329454997534/craft-cheese-105184847-1.jpg',
    category: 'Food'
  },
  {

    name: 'Xiaomi Redmi Note 11 Pro',
    price: 310,
    description: 'Super high refresh rate. A high refresh rate of 120Hz ensures smooth operation and rich image details when browsing the web.',
    rating: 4,
    link:'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    category: 'Phone'
  },
  {

    name:'Аксай Нан батон',
    price:0.4,
    description: '400 grams',
    rating: 5,
    link:'https://kaspi.kz/shop/p/aksai-nan-baton-400-g-102160127/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/h6b/67348593999902/aksai-nan-baton-nareznoi-400-g-102160127-1.jpg',
    category: 'Food'
  },
  {

    name: 'God of War Ragnarök PS5',
    price: 70,
    description: 'God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/god-of-war-ragnar-k-ps5-106671793/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h0a/62864419422238/god-of-war-ragnarok-ps5-106671793-1.jpg',
    category: 'Game'
  },
  {

    name: 'Яблоко Американка',
    price:1.5,
    description: 'type of fruit: apple\n' +
        'variety: stone fruit\n' +
        'type: american\n' +
        'country of production: Kazakhstan.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/magnum-jabloko-amerikanka-kazahstan-102382796/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h71/hcc/65277247160350/magnum-yabloko-amerikanka-kazakhstan-102382796-1.jpg',
    category: 'Food'
  },
  {

    name:'Minecraft',
    price: 30,
    description: 'Popular action game Minecraft for PS4',
    rating: 5,
    link:'https://kaspi.kz/shop/p/minecraft-ps4-10700138/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h86/31613644406814/minecraft-ps4-10700138-1-Container.jpg',
    category: 'Game'
  },
  {

    name: 'FIFA23',
    price: 50,
    description: 'Sport game FIFA23 for PS5',
    rating: 5,
    link:'https://kaspi.kz/shop/p/fifa-23-ps5-106552811/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdb/h43/62657955201054/fifa-23-ps5-106552811-1.jpg',
    category: 'Game'
  },
  {
    name: 'Samsung Galaxy Z Fold4',
    price :2460 ,
    description: 'The elegant combination of a unique form factor and natural classic shades draws attention every time you open it.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-512-gb-chernyi-podarok-106036420/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hd5/62179068051486/samsung-galaxy-z-fold4-12-gb-256-gb-seryj-smart-casy-samsung-galaxy-watch-4-classic-106306593-1.jpg',
    category: 'Phone'
  },
  {
    name: 'Pringles',
    price: 5,
    description: 'Extra Hot Flame 160 grams',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/chipsy-pringles-flame-extra-hot-kartofel-nye-syr-perets-160-g-108455433/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h3a/67913592111134/pringles-ostryi-perets-i-syr-160-gr-108455433-1.jpg',
    category: 'Food'
  },
  {
    name: 'Орда курт',
    price: 1.5,
    description: 'Соленный курт, 150гр',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/ferma-orda-kurt-soljonyi-150-g-102231146/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/hb9/45294242988062/ferma-orda-kurt-solenyj-150-g-102231146-1.jpg',
    category: 'Food'
  },
  {
    name:'Red Dead Redemption 2',
    price: 30,
    description: 'Game for PS4, by the RockStar Games',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/red-dead-redemption-2-ps4-10700955/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/h8b/31707573387294/red-dead-redemption-2-ps4-10700955-1-Container.jpg',
    category: 'Game'
  },
  {
    name: 'UFC 4',
    price: 30,
    description: 'Game for PS4, by Electronic Arts',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/ufc-4-ps4-100480145/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h5d/32852526202910/ufc-4-ps4-100480145-1-Container.jpg',
    category: 'Game'
  },
  {
    name: 'Apple iPhone 13',
    price: 840,
    description: 'Apple iPhone 13 features a 6.1-inch Super Retina XDR display with incredibly high pixel density - photos.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    category: 'Phone'
  },
  {
    name: 'Hitman 3',
    price: 112,
    description: 'For PS5 by the IO Interactive',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/hitman-3-ps5-101034203/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/h50/33372610527262/hitman-3-ps5-101034203-1-Container.jpg',
    category: 'Game'
  },
  {
    name:'Acer Nitro 5',
    price: 870,
    description: 'Intel Core i5 11400H,  NVIDIA GeForce GTX 1650, RAM 16 GB, SSD 512',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    category: 'Laptop'
  },
  {
    name:'Apple MacBook Pro 14',
    price: 2210,
    description: 'Apple M1 Pro, Apple M1 Pro 14-Core, RAM 16GB, SSD 512 GB',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    category: 'Laptop'
  },
  {
    name:'Ноутбук HP Spectre',
    price: 3060,
    description: 'Intel Core i7 1260P,  Intel Iris Xe Graphics, RAM 32GB, SSD 2TB',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/hp-spectre-x360-16-f1000ur-725w6ea-temno-sinii-107798565/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/hae/66311216267294/hp-spectre-x360-16-f1000ur-725w6ea-temno-sinii-107798565-1.jpg',
    category: 'Laptop'
  },
  {
    name:'Apple MacBook Air 13',
    price: 1070,
    description: 'Apple M1, Apple M1 7 Core, RAM 8GB, SSD 256GB',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    category: 'Laptop'
  },
  {
    name:'ASUS ROG Zephyrus',
    price: 2680,
    description: ' Intel Core i7-12700H, nVidia GeForce RTX 3060, RAM 16GB, SSD 512GB',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-m16-gu603zm-k8005w-90nr0822-m001h0-chernyi-106255104/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hfb/62099997327390/asus-rog-zephyrus-m16-gu603zm-k8005w-90nr0822-m001h0-chernyi-106255104-1.jpg',
    category: 'Laptop'
  },

];

for(let i of prods){
  products.push(new Product(i.rating, i.name, i.price, i.description, i.link, i.img, i.category));
}

