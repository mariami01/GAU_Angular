import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFactsComponent } from './country-facts/country-facts.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    CountryFactsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountryFactsComponent,
    HomeComponent
  ]

})
export class HomeModule { }
