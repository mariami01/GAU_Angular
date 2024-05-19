import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentListComponent } from './apartment/apartment-list/apartment-list.component';
import { ApartmentDetailComponent } from './apartment/apartment-detail/apartment-detail.component';
import { CartComponent } from './cart/cart/cart.component';
import { CartApartmentComponent } from './cart/cart-apartment/cart-apartment.component';

const routes: Routes = [
  { path: 'Apartments', component: ApartmentListComponent },
  { path: 'Apartments/:id', component: ApartmentDetailComponent },
  { path: 'Cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
