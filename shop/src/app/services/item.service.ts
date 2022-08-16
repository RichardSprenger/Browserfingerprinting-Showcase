import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }


  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  getItemById(id: number): Observable<Item | undefined> {
    return of(ITEMS.find(item => item.id === id));
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
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'Staubsaugerrobotter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'E-Roller',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'Bluethooth Kopfhörer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'USB Typ-C Kabel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'Campingtisch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'Hängematte',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'Ventilator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'Campingstuhl',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'Plantschbecken',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },
  {
    id: 1,
    name: 'Campingdecke',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
    image: 'assets/images/item-1.png'
  },

]
