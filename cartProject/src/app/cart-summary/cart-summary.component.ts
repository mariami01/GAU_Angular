import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  @Input() cart: any[] = [];

  calculateSubtotal(): number {
    let subtotal = 0;
    for (let item of this.cart) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  }

}
