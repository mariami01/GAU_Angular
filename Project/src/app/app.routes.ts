import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: "shop", component: ShopComponent },
    { path: "cart", component: CartComponent }
];
