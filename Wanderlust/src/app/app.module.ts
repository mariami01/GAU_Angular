import { SharedModule } from './shared/shared.module';
import { NgModule, isDevMode } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/reducers/notifications.reducer';
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
        StoreModule.forRoot({ cart: cartReducer }),
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CartModule,
        NgbModule,
        ApartmentModule,
        ReactiveFormsModule,
        AuthModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    ]
})
export class AppModule { }
