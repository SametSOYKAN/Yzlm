import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../nav/nav.component';
import { RouterModule } from '@angular/router';
import { CartSummaryComponent } from '../../components/cart-summary/cart-summary.component';



@NgModule({
    declarations: [
        NavComponent,
        CartSummaryComponent
    ],
    exports: [
        NavComponent,
        CartSummaryComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
                
    ]
})
export class SharedModule { }
