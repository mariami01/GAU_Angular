import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  SaveInput(form: any) {
    // console.log(form);
    console.log(form.value);
  }
}
