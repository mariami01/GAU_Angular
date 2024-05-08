import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'Apartments', component: ApartmentListComponent }
]


@NgModule({
  declarations: [
    ApartmentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ApartmentListComponent
  ]
})
export class ApartmentModule { }
