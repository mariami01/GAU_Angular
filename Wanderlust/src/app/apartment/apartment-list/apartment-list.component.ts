import { Component, OnInit } from '@angular/core';
import { Apartment, ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrl: './apartment-list.component.css'
})
export class ApartmentListComponent implements OnInit {
  apartments!: Apartment[];
  filteredApartments: Apartment[] = [];
  apartmentCount: number = 0;
  sortOptions: string[] = ['Low to High', 'High to Low', 'Recommended'];
  selectedSortOption: string = 'Recommended';
  propertyNameSearchTerm: string = '';
  budgetPerDay: number[] = [];

  checked200: boolean = false;
  checked500: boolean = false;
  checked1000: boolean = false;
  checked2000: boolean = false;
  checked5000: boolean = false;

  checkedPool: boolean = false;
  checkedFreeWiFi: boolean = false;
  checkedParking: boolean = false;
  checkedBusinessServices: boolean = false;
  checkedPetFriendly: boolean = false;

  location: string = ''
  startDate: string = ''
  endDate: string = ''
  startDatePlaceholder: string = 'Start Date';
  endDatePlaceholder: string = 'End Date';
  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.getApartments();
  }

  getApartments(): void {
    this.apartments = this.apartmentService.getApartments();
    // Initially, display all apartments
    this.filteredApartments = [...this.apartments];
    this.updateApartmentCount();
  }
  filterApartmentsByPrice(sortOrder: string): void {
    if (sortOrder === 'Low to High') {
      this.filteredApartments = this.apartments.slice().sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortOrder === 'High to Low') {
      this.filteredApartments = this.apartments.slice().sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (sortOrder === 'Recommended') {
      this.filteredApartments = this.apartments.slice().sort((a, b) => b.stars - a.stars);
    }
    this.updateApartmentCount();
  }
  private updateApartmentCount(): void {
    this.apartmentCount = this.filteredApartments.length;
  }

  filterApartmentsByPropertyName(): void {
    this.filteredApartments = this.apartments.filter(apartment =>
      apartment.name.toLowerCase().includes(this.propertyNameSearchTerm.toLowerCase())
    );
    this.updateApartmentCount();
  }
  filterApartmentsByBudgetPerDay(): void {
    this.budgetPerDay = [];

    if (this.checked200) this.budgetPerDay.push(200);
    if (this.checked500) this.budgetPerDay.push(500);
    if (this.checked1000) this.budgetPerDay.push(1000);
    if (this.checked2000) this.budgetPerDay.push(2000);
    if (this.checked5000) this.budgetPerDay.push(5000);

    this.filteredApartments = this.apartments.filter(apartment =>
      this.budgetPerDay.some(budget => apartment.pricePerNight <= budget)
    );
    this.updateApartmentCount();
  }
  filterApartmentsByFeatures(): void {
    const selectedFeatures: string[] = [];
    if (this.checkedPool) selectedFeatures.push('Pool');
    if (this.checkedFreeWiFi) selectedFeatures.push('Free WiFi');
    if (this.checkedParking) selectedFeatures.push('Parking');
    if (this.checkedBusinessServices) selectedFeatures.push('Business Services');
    if (this.checkedPetFriendly) selectedFeatures.push('Pet Friendly');

    this.filteredApartments = this.apartments.filter(apartment =>
      selectedFeatures.every(feature => apartment.features.includes(feature))
    );
    this.updateApartmentCount();
  }

  search(): void {
    const location = (document.getElementById('location') as HTMLInputElement).value;
    console.log('Location:', location);
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);

    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);

    this.filteredApartments = this.apartments.filter(apartment =>
      apartment.city.toLowerCase() === this.location.toLowerCase() &&
      apartment.bookedDates.every(bookedDate => {
        const date = new Date(bookedDate);
        return date < startDate || date > endDate;
      })
    );
    this.updateApartmentCount();
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }
  getTodayStartDate(): string {
    return this.startDate;
  }
}
