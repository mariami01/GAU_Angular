import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment, ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrl: './apartment-detail.component.css'
})
export class ApartmentDetailComponent {
  apartment: Apartment | undefined;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

}
