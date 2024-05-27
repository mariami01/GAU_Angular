import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartApartmentComponent } from './cart-apartment/cart-apartment.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent,
    CartApartmentComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CartComponent,
    CartApartmentComponent
  ]
})
export class CartModule { }
