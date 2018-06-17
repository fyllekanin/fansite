import { Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

export function homeModule() {
    return HomeModule;
}

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: homeModule
    }
];