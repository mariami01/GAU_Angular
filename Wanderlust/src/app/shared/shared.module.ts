import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  // { path: 'header', component: HeaderComponent }
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
