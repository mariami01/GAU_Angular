import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third-details',
  standalone: true,
  imports: [],
  templateUrl: './third-details.component.html',
  styleUrl: './third-details.component.css'
})
export class ThirdDetailsComponent implements OnInit {
  detailsId: string | null = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailsId = this.route.snapshot.paramMap.get('id');
  }


}
