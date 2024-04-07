import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, ProductListComponent, CartSummaryComponent]
})
export class AppComponent {

}
