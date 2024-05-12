import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment, ApartmentService } from '../apartment.service';
import { ApartmentListComponent } from '../apartment-list/apartment-list.component';
import { log } from 'console';
@Component({
    selector: 'app-apartment-detail',
    templateUrl: './apartment-detail.component.html',
    styleUrl: './apartment-detail.component.css'
})
export class ApartmentDetailComponent {
    apartmentDetailed: Apartment | undefined;
    id: number | string | null | undefined;

    constructor(
        private route: ActivatedRoute,
        private apartmentService: ApartmentService
    ) { }


    getApartmentIdFromUrl() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
        console.log('this idd', this.id);

        this.apartmentDetailed = this.apartmentService.getApartmentsById(this.id);

    }




}
