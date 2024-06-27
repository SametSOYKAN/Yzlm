import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { AlertifyService } from '../../services/alertify.service';
import { Arac } from '../../models/arac';
import { ActivatedRoute } from '@angular/router';


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
    private alertifyService: AlertifyService) { }

  title = "Araç Bilgileri"
  filterText = ""

  /*   addToCart(arac:any){
      alertify.success(arac.model + " eklendi.")
      // alert ("Sepete eklendi : " + arac.model)
    } */

  addToCart(arac: any) {
    this.alertifyService.success(arac.model + " eklendi.")
  }

  ngOnInit(): void {
   
      this.carService.getCars().subscribe(data => { this.araclar = data; });
    // Operasyon subscribe'ı görene kadar durmuyor.
  }

  


}
