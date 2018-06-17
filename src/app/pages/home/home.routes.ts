import { HomeDefaultComponent } from './home-default/home-default.component';
import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeDefaultComponent
    }
];