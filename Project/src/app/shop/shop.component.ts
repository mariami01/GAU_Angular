import { ProductService } from './../product.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  products: any[] = [];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any): void {
    console.log("added!");

    this.productService.addToCart(product);
  }

}
