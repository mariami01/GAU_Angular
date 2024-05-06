import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFactsComponent } from './country-facts/country-facts.component';



@NgModule({
  declarations: [
    CountryFactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CountryFactsComponent]

})
export class HomeModule { }
