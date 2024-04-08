import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[] = [
    {
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      price: 30,
      quantity: 3000
    },
    {
      name: 'Stylish Leather Wallet',
      size: 'N/A',
      color: 'Black',
      material: 'Leather',
      seller: 'FashionHub',
      price: 50,
      quantity: 500
    },
    {
      name: 'Wireless Bluetooth Headphones',
      size: 'Adjustable',
      color: 'White',
      material: 'Plastic',
      seller: 'TechZone',
      price: 80,
      quantity: 200
    },
    {
      name: 'Designer Sunglasses',
      size: 'One Size',
      color: 'Brown',
      material: 'Glass',
      seller: 'SunShadesCo',
      price: 100,
      quantity: 1000
    },
    {
      name: 'Portable Power Bank',
      size: 'Pocket Size',
      color: 'Silver',
      material: 'Metal',
      seller: 'GadgetGalaxy',
      price: 40,
      quantity: 800
    }
  ];

  constructor() { }

  // add product to list 
  addProducts(product: any) {
    this.products.push(product);
  }

  // get product 
  getProducts() {
    return this.products;
  }
}
