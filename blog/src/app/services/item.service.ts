import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items = ITEMS;

  constructor() { }


  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getItemById(id: number): Observable<Item | undefined> {
    return of(this.items.find(item => item.id == id));
  }
}


export interface Item  {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}


export const ITEMS: Item[] = [
  {
    id: 1,
    name: 'Micro SD Karte',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 24.99,
    image: 'assets/images/item-1.jpg'
  },
  {
    id: 2,
    name: 'Staubsaugerrobotter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 249.99,
    image: 'assets/images/item-2.jpg'
  },
  {
    id: 3,
    name: 'E-Roller',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 399.99,
    image: 'assets/images/item-3.jpg'
  },
  {
    id: 4,
    name: 'Bluetooth Kopfhörer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 44.99,
    image: 'assets/images/item-4.jpg'
  },
  {
    id: 5,
    name: 'USB Typ-C Kabel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 4.98,
    image: 'assets/images/item-5.jpg'
  },
  {
    id: 6,
    name: 'Campingtisch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 67.59,
    image: 'assets/images/item-6.jpg'
  },
  {
    id: 7,
    name: 'Hängematte',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 29.99,
    image: 'assets/images/item-7.webp'
  },
  {
    id: 8,
    name: 'Ventilator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 15.99,
    image: 'assets/images/item-8.jpg'
  },
  {
    id: 9,
    name: 'Campingstuhl',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 34.99,
    image: 'assets/images/item-9.jpg'
  },
  {
    id: 10,
    name: 'Plantschbecken',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 19.99,
    image: 'assets/images/item-10.jpg'
  },
  {
    id: 11,
    name: 'Campingdecke',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 9.99,
    image: 'assets/images/item-11.png'
  },
  {
    id: 12,
    name: '3D Drucker',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 214.99,
    image: 'assets/images/item-12.jpg'
  },

]
