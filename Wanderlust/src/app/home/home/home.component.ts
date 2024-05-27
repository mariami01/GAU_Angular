import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../../apartment/apartment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  topCountries: { country: string, count: number }[] = [];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.topCountries = this.apartmentService.getApartmentsByCountry();
  }
}
