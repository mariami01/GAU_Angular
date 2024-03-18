import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';
import { ThirdComponent } from './third/third.component';

export const routes: Routes = [
    {
        path: 'first-component', component: FirstComponent,
        children: [
            {
                path: 'child-a',
                title: 'updated-child-a',
                component: ChildAComponent
            },
            {
                path: 'child-b',
                title: 'updated-child-b',
                component: ChildBComponent
            },

        ]
    },
    { path: 'second-component', component: SecondComponent },
    { path: 'third-component', component: ThirdComponent },

    { path: 'third/:id', component: ThirdComponent },

    { path: "", redirectTo: "/first-component", pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
