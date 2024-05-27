import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { ApartmentModule } from "./apartment/apartment.module";
import { CartModule } from './cart/cart.module';
import { ApartmentService } from './apartment/apartment.service';
import { CartService } from './cart/cart.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        ApartmentService,
        CartService
    ],
    bootstrap: [AppComponent],
    imports: [
        HomeModule,
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        CartModule,
        NgbModule,
        ApartmentModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
