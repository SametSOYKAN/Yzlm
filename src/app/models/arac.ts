import { Photo } from "./photo";
import { Rezervasyon } from "./rezervasyon";

export interface Arac {
    Id: number;
    aracId: number;
    marka?: string;
    model?: string;
    tipi?: string;
    kapakResim?:string;
    resim?: Photo[];
    vitesTuru?: string;
    yakitTuru?: string;
    gunlukKiralamaUcreti?: number;
    kisiSayisi?: number;
    kapiSayisi?: number;
    klima?: boolean;
    plaka?: string;
    modelYili?: number;

    rezervasyon?: Rezervasyon;
  }
  

