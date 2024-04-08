import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent implements OnInit {
  products: any[] = [];
  subtotal: number = 0;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.calculateSubtotal();
  }
  // calculate subtotal
  calculateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      subtotal += product.price * product.quantity
    }

    return subtotal;
  }
}
