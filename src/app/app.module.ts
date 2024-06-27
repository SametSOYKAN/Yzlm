import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { NavComponent } from "./nav/nav.component";
import { CarsComponent } from "./components/cars/cars.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AppRoutes } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./modules/shared/shared.module";
import { CarDetailsComponent } from "./components/car-details/car-details.component";
import { CarFilterPipe } from "./components/car-details/car-filter.pipe";


@NgModule({
    declarations:[
        AppComponent,
        CarsComponent,
        CarDetailsComponent,
        HomeComponent,
        LoginComponent,
        NotFoundComponent,
        CarFilterPipe
        
    ],

    imports:[
        BrowserModule,
        HttpClientModule,
        AdminRoutingModule,
        AppRoutes,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
           
    ],

    providers:[],

    bootstrap:[
        AppComponent
    ]
    
})

export class AppModule {}