import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NavComponent } from '../../nav/nav.component';
import { CarSaveComponent } from './car-save/car-save.component';
import { ReservationSaveComponent } from './reservation-save/reservation-save.component';
import { UserSaveComponent } from './user-save/user-save.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    
    CarSaveComponent,
    ReservationSaveComponent,
    UserSaveComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule
    



  ]
})
export class AdminModule { }
