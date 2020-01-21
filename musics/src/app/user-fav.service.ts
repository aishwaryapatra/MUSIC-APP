import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserFavService {

  constructor(private http: HttpClient) { }
  gettingUserFavMap(email):Observable<Array<any>>{
    return this.http.get<any>(`http://localhost:8001/auth/verfication/favMusic/getFavMap`);

  }
  sendingUserFavMap(userFavlist){
    return this.http.post("http://localhost:8001/auth/verfication/favMusic/saveMap",userFavlist);
  }

}
