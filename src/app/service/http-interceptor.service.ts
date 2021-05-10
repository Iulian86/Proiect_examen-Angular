import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {SingInService} from "./sing-in.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private signInService: SingInService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercept");
    if(this.signInService.getBasicAuthFlagFromSessionStorage() && req.url.indexOf('basicauth') === -1){
      const authReq = req.clone({
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.signInService.getBasicAuthFlagFromSessionStorage()
          })
        }
      );
      return next.handle(authReq);
    }else{
      return next.handle(req);
    }
  }
}
