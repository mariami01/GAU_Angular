import { Injectable } from '@angular/core';
import { Apartment } from '../apartment/apartment.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Apartment[] = [];

  constructor() { }

  addToCart(apartment: Apartment): void {
    this.items.push(apartment);
  }

  getItems(): Apartment[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

}
