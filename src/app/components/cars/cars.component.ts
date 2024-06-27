import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Arac } from '../../models/arac';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styles: ``,
  providers: [CarService]
  })


export class CarsComponent implements OnInit {

  araclar: Arac[] = [];


  constructor(private activatedRoute: ActivatedRoute, private carService: CarService) { }
  title="Araç Bilgileri"


  ngOnInit(): void {

      this.carService.getCars().subscribe(data => { this.araclar = data; });
    // Operasyon subscribe'ı görene kadar durmuyor.
       }


}