import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../apartment/apartment.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-apartment',
  templateUrl: './cart-apartment.component.html',
  styleUrl: './cart-apartment.component.css'
})
export class CartApartmentComponent implements OnInit {
  items: Apartment[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
}
