import { Injectable } from '@angular/core';


import {  HttpRequest,HttpHandler, HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
;


@Injectable({
  providedIn: 'root'
})
export class InterceptorServService implements HttpInterceptor {

  constructor() {}   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {      console.log('INTERCEPTOR');
  // We retrieve the token, if any
  const token = localStorage.getItem("authtoken");
  // console.log("Inside prflight");
  // console.log(token)
  let newHeaders = req.headers;
  console.log(req);
  console.log("-----------------");
  if (token){
  //if (token) {
     // If we have a token, we append it to our new headers
    //  newHeaders = newHeaders.append('Authorization ', `Bearer ${token}`);
 
    req = req.clone({headers: req.headers.set('Authorization', `Bearer ${token}`)});
    
  
  }
  console.log(req);
  // Finally we have to clone our request with our new headers
  // This is required because HttpRequests are immutable
  // const authReq = req.clone({headers: newHeaders});      // Then we return an Observable that will run the request
  // or pass it to the next interceptor if any
  return next.handle(req);
}
isHeaderNeeded(url: string) {
  if (url == "http://localhost:8001/auth/verfication/users/") { // this condition is up to you, it could be an exact match or how ever you like
      return false;
  } else {
      return true;
  }
}
} 