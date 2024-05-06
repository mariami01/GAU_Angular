import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Apartments', component: ApartmentListComponent }
]


@NgModule({
  declarations: [
    ApartmentListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ApartmentListComponent
  ]
})
export class ApartmentModule { }
