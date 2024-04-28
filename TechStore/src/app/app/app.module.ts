import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { CoreModuleModule } from '../core-module/core-module.module';
import { ProductsModuleModule } from '../products-module/products-module.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModuleModule,
    ProductsModuleModule
  ]
})
export class AppModule { }
