import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
    name: 'Apple iPhone 15 Pro 256GB',
    description: 'Смартфон Apple с мощным процессором A17 Pro, OLED-дисплеем и профессиональной камерой.',
    price: 699000,
    rating: 4.8,
    image: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/c/photos', 
    images: [
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/c/photos',
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/c/gallery',
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/c/other'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191'
  },
  {
    id: 2,
    name: 'Apple iPhone 15 Pro 128GB',
    description: 'Компактная версия iPhone 15 Pro с чёрным корпусом и мощными возможностями.',
    price: 649000,
    rating: 4.7,
    image: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-esim-chernyi-121701465/c/photos',
    images: [
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-esim-chernyi-121701465/c/photos',
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-esim-chernyi-121701465/c/gallery',
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-esim-chernyi-121701465/c/other'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-esim-chernyi-121701465'
  },
  {
    id: 3,
    name: 'Apple iPhone 15 Pro 512GB',
    description: 'Флагманский iPhone 15 Pro с большим объёмом памяти и отличной производительностью.',
    price: 799000,
    rating: 4.9,
    image: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-512gb-belyi-113138293/c/photos',
    images: [
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-512gb-belyi-113138293/c/photos',
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-512gb-belyi-113138293/c/gallery',
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-512gb-belyi-113138293/c/other'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-512gb-belyi-113138293'
  },
  {
    id: 4,
    name: 'TP‑LINK Archer T2U Nano',
    description: 'Компактный Wi‑Fi адаптер TP‑LINK с поддержкой до 433 Мбит/с — идеальное решение для ноутбуков и ПК.',
    price: 11990,
    rating: 4.5,
    image: 'https://kaspi.kz/shop/p/wi-fi-adapter-tp-link-archer-t2u-nano-7600532/c/photos',
    images: [
      'https://kaspi.kz/shop/p/wi-fi-adapter-tp-link-archer-t2u-nano-7600532/c/photos',
      'https://kaspi.kz/shop/p/wi-fi-adapter-tp-link-archer-t2u-nano-7600532/c/gallery',
      'https://kaspi.kz/shop/p/wi-fi-adapter-tp-link-archer-t2u-nano-7600532/c/other'
    ],
    link: 'https://kaspi.kz/shop/p/wi-fi-adapter-tp-link-archer-t2u-nano-7600532'
  },
  {
    id: 5,
    name: 'Ulanzi U‑Rig Pro штатив',
    description: 'Ручной студийный штатив Ulanzi для телефона и камер — аксессуар для контента и видео.',
    price: 24990,
    rating: 4.4,
    image: 'https://kaspi.kz/shop/p/ruchnoi-shtativ-ulanzi-u-rig-pro-102814348/c/photos',
    images: [
      'https://kaspi.kz/shop/p/ruchnoi-shtativ-ulanzi-u-rig-pro-102814348/c/photos',
      'https://kaspi.kz/shop/p/ruchnoi-shtativ-ulanzi-u-rig-pro-102814348/c/gallery',
      'https://kaspi.kz/shop/p/ruchnoi-shtativ-ulanzi-u-rig-pro-102814348/c/other'
    ],
    link: 'https://kaspi.kz/shop/p/ruchnoi-shtativ-ulanzi-u-rig-pro-102814348'
  },
  {
    id: 6,
    name: 'Чехол 727 для iPhone 14 Plus',
    description: 'Защитный чехол с прочной конструкцией и стильным дизайном.',
    price: 15990,
    rating: 4.2,
    image: 'https://kaspi.kz/shop/p/chehol-727-dlja-apple-iphone-14-plus-bezhevyi-147243195/c/photos',
    images: [
      'https://kaspi.kz/shop/p/chehol-727-dlja-apple-iphone-14-plus-bezhevyi-147243195/c/photos',
      'https://kaspi.kz/shop/p/chehol-727-dlja-apple-iphone-14-plus-bezhevyi-147243195/c/gallery',
      'https://kaspi.kz/shop/p/chehol-727-dlja-apple-iphone-14-plus-bezhevyi-147243195/c/other'
    ],
    link: 'https://kaspi.kz/shop/p/chehol-727-dlja-apple-iphone-14-plus-bezhevyi-147243195'
  },
  {
    id: 7,
    name: 'Apple iPhone 15 Pro Max 256GB',
    description: 'Премиальный смартфон Apple с большим экраном и отличной камерой.',
    price: 829000,
    rating: 4.9,
    image: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/c/photos',
    images: [
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/c/photos',
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/c/gallery',
      'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/c/other'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420'
  },
  {
    id: 8,
    name: 'Игровая головоломка ToySib',
    description: 'Развивающая настольная игра для детей — отличный подарок и способ провести время всей семьёй.',
    price: 7990,
    rating: 4.7,
    image: 'https://kaspi.kz/shop/p/golovolomka-toysib-gotovimsja-k-shkole-121101914/c/photos',
    images: [
      'https://kaspi.kz/shop/p/golovolomka-toysib-gotovimsja-k-shkole-121101914/c/photos',
      'https://kaspi.kz/shop/p/golovolomka-toysib-gotovimsja-k-shkole-121101914/c/gallery',
      'https://kaspi.kz/shop/p/golovolomka-toysib-gotovimsja-k-shkole-121101914/c/other'
    ],
    link: 'https://kaspi.kz/shop/p/golovolomka-toysib-gotovimsja-k-shkole-121101914'
  },
  {
    id: 9,
    name: 'Apple iPhone 15 128GB голубой',
    description: 'iPhone 15 с красивым цветом и отличными характеристиками для повседневного использования.',
    price: 599000,
    rating: 4.6,
    image: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/c/photos',
    images: [
      'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/c/photos',
      'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/c/gallery',
      'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/c/other'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929'
  },
  {   
      id: 10,
      name: 'iPhone 15 Pro',
      description: 'Latest Apple smartphone with A17 Pro chip and titanium design. ',
      price: 699000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hxx/hxx/iphone.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hxx/hxx/iphone.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hyy/hyy/iphone2.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hzz/hzz/iphone3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro'
  },
  ]
}
