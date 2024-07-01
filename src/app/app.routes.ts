import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CarsComponent } from './components/cars/cars.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

/*
import { AdminLayoutComponent } from './modules/admin/admin-layout/admin-layout.component';
import { CarSaveComponent } from './modules/admin/car-save/car-save.component';
import { ReservationSaveComponent } from './modules/admin/reservation-save/reservation-save.component';
import { UserSaveComponent } from './modules/admin/user-save/user-save.component';
*/

export const routes: Routes = [


    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'home',
        component: HomeComponent,
    
        children: [
    
            {
                path: 'araclar',
                component: CarDetailsComponent
            },

            {
                path: 'araclar/:aracMarka',
                component: CarDetailsComponent
            },
            {
                path: 'sepet',
                loadChildren: () => import('./modules/cart/cart.module').then(t => t.CartModule)
              },

        ]
    },

    {
        path: '**',
        component: NotFoundComponent,
        pathMatch: "full"
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }