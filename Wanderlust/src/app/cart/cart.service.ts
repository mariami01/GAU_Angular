import { Injectable } from '@angular/core';
import { Apartment } from '../apartment/apartment.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Apartment[] = []

  getCart(): Apartment[]{
    return this.cart
  }

  addToCart(apartment: Apartment): void{
    this.cart.push(apartment)
  }
  clearCart(): void{
    this.cart = []
  }
  
  constructor() { }
}
