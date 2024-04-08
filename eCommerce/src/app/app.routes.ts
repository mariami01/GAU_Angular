import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "placeholder", component: PlaceholderComponent }
];
