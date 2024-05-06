import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WanderLust';
}
