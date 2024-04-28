// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsModuleModule } from '../products-module/products-module.module'; 
import { ProductDataService } from '../products-module/product-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ProductsModuleModule[] = [];
  private cartSubject = new BehaviorSubject<ProductsModuleModule[]>(this.cartItems);

  constructor(private productsDataService: ProductDataService) { }

  getCartItems(): ProductsModuleModule[] {
    return this.cartItems;
  }

  addToCart(product: ProductsModuleModule): void {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }

  // removeFromCart(productId: number): void {
  //   this.cartItems = this.cartItems.filter(item => item.productId !== productId); // Assuming productId is the correct property
  //   this.cartSubject.next(this.cartItems);
  // }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  getCartItemsObservable(): BehaviorSubject<ProductsModuleModule[]> {
    return this.cartSubject;
  }

  fetchProducts(): void {
    this.productsDataService.getProducts().subscribe(
      (products: ProductsModuleModule[]) => {
        console.log('Fetched products:', products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
