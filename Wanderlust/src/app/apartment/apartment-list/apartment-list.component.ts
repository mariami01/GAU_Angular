import { Component, OnInit } from '@angular/core';
import { Apartment, ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrl: './apartment-list.component.css'
})
export class ApartmentListComponent implements OnInit {
  apartments!: Apartment[];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.getApartments();
  }

  getApartments(): void {
    this.apartments = this.apartmentService.getApartments();
  }
}
