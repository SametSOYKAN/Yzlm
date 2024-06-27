import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserSaveComponent } from './user-save/user-save.component';
import { CarSaveComponent } from './car-save/car-save.component';
//import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
 
      {
        path: 'car-save',
        component: CarSaveComponent
      },
      {
        path: 'car-save/:id',
        component: CarSaveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
