import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TemplateDrivenFormComponent, ReactiveFormComponent]
})
export class AppComponent {
  title = 'lab-06';
}
