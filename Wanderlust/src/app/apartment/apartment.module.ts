import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { FormsModule } from '@angular/forms';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';

@NgModule({
  declarations: [
    ApartmentListComponent,
    ApartmentDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ApartmentListComponent,
    ApartmentDetailComponent,
  ]
})
export class ApartmentModule { }
