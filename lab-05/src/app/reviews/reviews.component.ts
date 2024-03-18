import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  constructor(private router: Router) { }

  goToDetails(): void {
    this.router.navigate(['/details']);
  }

}
