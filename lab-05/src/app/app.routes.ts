import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes: Routes = [
    { path: 'details', component: DetailsComponent },
    { path: 'shipping', component: ShippingComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'questions', component: QuestionsComponent },


    // { path: '**', component: PageNotFoundComponent }
];
