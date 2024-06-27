import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from '../models/kullanici';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:5001/api/kullanicilar';

  constructor(private httpClient: HttpClient) { }
  getKullanicilar(): Observable<Kullanici[]>{
    return this.httpClient.get<Kullanici[]>(this.apiUrl);
  }
  putCars(kullanici: Kullanici): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/${kullanici.kullaniciId}`, kullanici);
  }
  deleteCars(kullaniciId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${kullaniciId}`);
  }
  postCars (kullanici : Kullanici) :Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}`, kullanici);
}
}
  

