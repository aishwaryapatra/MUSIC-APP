import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl = 'http://localhost:8002/users/';
  isLoggedIn : boolean = false;



  constructor(private http: HttpClient) {
    
   }

login(users:User) {

  return this.http.post(`${this.baseUrl}`+'login',users,{responseType:"text"});
}
setLoggedInUserToken(val){
  localStorage.setItem("userKey",val)
}
getLoggedInUserToke(){
  return localStorage.getItem("userKey");
}
getimage(email:String): Observable<User> {
  return this.http.get<User>(`${this.baseUrl}/getimage/${email}`);
}
}


