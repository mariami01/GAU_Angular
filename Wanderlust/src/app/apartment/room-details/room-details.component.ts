import { Component, OnInit, Input } from '@angular/core';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent implements OnInit {

  @Input()
  apartmentId!: number;
  roomDetails: any;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.apartmentService.getRoomDetails().subscribe(
      data => {
        console.log('Raw Room details fetched:', data); // Log the raw data
        // Check if the data is an array and take the first element if it is
        if (Array.isArray(data)) {
          this.roomDetails = data[0];
        } else {
          this.roomDetails = data;
        }
        console.log('Processed Room details:', this.roomDetails); // Log the processed data
      },
      error => {
        console.error('Error fetching room details:', error);
      }
    );
  }
}
