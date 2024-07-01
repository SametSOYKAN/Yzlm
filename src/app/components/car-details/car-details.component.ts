import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { AlertifyService } from '../../services/alertify.service';
import { Arac } from '../../models/arac';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';



//declare let alertify:any;
// Alertify'ı kullanablimek için önce declare etmemiz gerekir.
// Uyarıları bir çok yerde kullanmamız gerektiğinden service olarak yazmamız gerekmektedir.

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styles: ``,
  providers: [CarService]
})
export class CarDetailsComponent implements OnInit {
  araclar: Arac[] = [];


  constructor(
    private activatedRoute: ActivatedRoute, 
    private carService: CarService, 
    private alertifyService: AlertifyService,
    private cartService: CartService
    ) { }

  title = "Araç Bilgileri"
  filterText = ""

  /*   addToCart(arac:any){
      alertify.success(arac.model + " eklendi.")
      // alert ("Sepete eklendi : " + arac.model)
    } */

  addToCart(arac: any) {
    this.alertifyService.success(arac.model + " eklendi.")
    this.cartService.add({
      arac:arac,
      quantity:1,
    })
    
  }

  ngOnInit(): void {
  //  servisi tüketeceğiz.
    
   
    //  this.carService.getCars().subscribe(data => { this.araclar = data; });
    // Operasyon subscribe'ı görene kadar durmuyor.

    this.activatedRoute.params.subscribe(param=>{
      let aracMarka = param['aracMarka'];
      let obsCars = aracMarka
        ? this.carService.getCarsByMarka(aracMarka)
        : this.carService.getCars();

        obsCars.subscribe(data=> {this.araclar=data;})
    })
  }

  


}
