import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { FormsModule } from '@angular/forms';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

@NgModule({
  declarations: [
    ApartmentListComponent,
    ApartmentDetailComponent,
    RoomDetailsComponent
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
