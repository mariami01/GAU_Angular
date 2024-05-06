import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentListComponent } from './apartment/apartment-list/apartment-list.component';

const routes: Routes = [
  { path: 'Apartments', component: ApartmentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
