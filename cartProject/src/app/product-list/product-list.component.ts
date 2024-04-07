import { Component, Input, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


  // @Input() cart: any[] = [];
  productList = [
    { name: 'T-shirts with multiple colors, for men and lady', size: 'medium, Color: blue,  Material: Plastic', Seller: 'Artel Market', price: 30, quantity: 3000 },
    { name: 'Stylish Leather Wallet', size: 'N/A', color: 'Black', material: 'Leather', seller: 'FashionHub', price: 50, quantity: 500 },
    { name: 'Wireless Bluetooth Headphones', size: 'Adjustable', color: 'White', material: 'Plastic', seller: 'TechZone', price: 80, quantity: 200 },
    { name: 'Designer Sunglasses', size: 'One Size', color: 'Brown', material: 'Glass', seller: 'SunShadesCo', price: 100, quantity: 1000 },
    { name: 'Portable Power Bank', size: 'Pocket Size', color: 'Silver', material: 'Metal', seller: 'GadgetGalaxy', price: 40, quantity: 800 }
  ]
  cart = [
    { name: 'T-shirts with multiple colors, for men and lady', size: 'medium, Color: blue,  Material: Plastic', Seller: 'Artel Market', price: 30, quantity: 3 },
    { name: 'Stylish Leather Wallet', size: 'N/A', color: 'Black', material: 'Leather', seller: 'FashionHub', price: 50, quantity: 2 },
    { name: 'Wireless Bluetooth Headphones', size: 'Adjustable', color: 'White', material: 'Plastic', seller: 'TechZone', price: 80, quantity: 1 },
  ]
  index!: number;
  removeItem(index: number): void {
    // console.log(this.productList)
    this.cart.splice(index, 1);
  }

  quantityOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
}
