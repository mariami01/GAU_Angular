import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TempStudy';

  courses = [1, 2];
  viewMode = "Map";

  updatedCourses = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'Chemistry' },
    { id: 3, name: 'Bio' },
    { id: 4, name: 'Literature' },
  ]

  onAdd() {
    this.updatedCourses.push({ id: 5, name: 'Comp Sci' });
  }

  onRemove(updatedCourse: { id: number; name: string; }) {
    let index = this.updatedCourses.indexOf(updatedCourse);
    this.updatedCourses.splice(index, 1);
  }
}
