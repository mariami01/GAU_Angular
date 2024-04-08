import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../product.service';
import { CheckoutFormComponent } from "./checkout-form/checkout-form.component";
@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [RouterLink, RouterOutlet, CommonModule, FormsModule, CheckoutFormComponent]
})
export class CartComponent implements OnInit {
  checkout() {
  throw new Error('Method not implemented.');
  }

  updateTotal(index: number): void {
    this.cartItems[index].total = this.cartItems[index].price * this.cartItems[index].quantity;
    this.calculateTotals();
  }
  calculateTotals(): void {
    this.cartItems.forEach(item => {
      item.total = item.price * item.quantity;
    });
  }
  getTotal() {
    let subtotal = 0;
    for (let item of this.cartItems) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }
  cartItems: any[] = [];

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
    this.calculateTotals();
    console.log('Cart Items:', this.cartItems);
  }

}