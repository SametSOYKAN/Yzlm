import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { Arac } from '../models/arac';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }


  private apiUrl = 'http://localhost:5001/api/araclar';

  getCars(): Observable<Arac[]> {
    return this.httpClient.get<Arac[]>(this.apiUrl).pipe(// pipe ile log alacağız. 
      tap(data => console.log(JSON.stringify(data)), // data'yı json formatından string formata çevirip konsol'a logladık.
        catchError(this.handleError) // Hata operasyonunu oluşturalım. 

        // Bu data şuan observable durumunda yani subscribe olana kadar başka operasyonlarda da kullanılabilir.
        // Örneğin konsola loglayabiliriz. top() metodu.
        // Yada hata mesajı alabliriz. catchError() metodu.
      ));
  }

  handleError(err: HttpErrorResponse) {
    // Error'un türü HttpErrorResponse olacak.
    let errMessage = 'Hata Mesajı'

    if (err.error instanceof ErrorEvent)
    // Eğer err'un error'u bir hata event'i ise bunu TypeScript'te İnstanceof ile yakabiliyabiliyoruz.
    // Eğer hatanın türü ErrorEvent ise:
    {
      errMessage = 'Hata Mesajı' + err.error.message
      // Hata mesajını geri döndür.
    }
    else {
      errMessage = 'Sistemsel bir hata' 
      // Değilse sistemsel bir hata olarak ekrana yazdır.
    }
    return throwError(errMessage);
  }

  getCarsById(Id: number): Observable<Arac> {
    return this.httpClient.get<Arac>(`${this.apiUrl}/${Id}`)
  }

  putCars(arac: Arac): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/${arac.aracId}`, arac);
  }

  deleteCars(Id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${Id}`);
  }

  postCars(arac: Arac): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}`, arac);
  }

}