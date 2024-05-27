import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentListComponent } from './apartment/apartment-list/apartment-list.component';
import { ApartmentDetailComponent } from './apartment/apartment-detail/apartment-detail.component';
import { CartComponent } from './cart/cart/cart.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'Discover', component: HomeComponent },
  { path: '', redirectTo: '/Discover', pathMatch: 'full' },
  { path: 'Apartments', component: ApartmentListComponent },
  { path: 'Apartments/:id', component: ApartmentDetailComponent },
  { path: 'Cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
