import { Injectable } from '@angular/core';


declare let alertify: any;

@Injectable({
  providedIn: 'root'
  //root ifadesi global bir service olduğunu gösteriyor.
  //app.module.ts'in içerisinde provider kısmına eklediğimizdede global bir servis olduğunu gösteririz.
})
export class AlertifyService {

  constructor() { }


  success(message: string) {
    alertify.success(message)
  }

  error(message: string) {
    alertify.error(message)
  }

  warning(message: string) {
    alertify.warning(message)
  }

}
