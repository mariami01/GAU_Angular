import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartApartmentComponent } from './cart-apartment/cart-apartment.component';



@NgModule({
  declarations: [
    CartComponent,
    CartApartmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    CartApartmentComponent
  ]
})
export class CartModule { }
