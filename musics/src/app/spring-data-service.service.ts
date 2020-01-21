import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from './artist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringDataServiceService {

  constructor(private httpClient: HttpClient) { }
  addDat(arObj){
    console.log('Inside Spring Service');
    console.log(arObj);
    return (this.httpClient.post("http://localhost:8001/auth/verfication/favMusic/saveFav",arObj));
  }
  getData(artistId):Observable<Array<any>>{
    console.log("Inside retriving data as per artistID");
    return (this.httpClient.get<any>(`http://localhost:8001/auth/verfication/favMusic/getFav/${artistId}`));
  }
  saveRecommendation(recomObj){
    return(this.httpClient.post("http://localhost:8001/auth/verfication/favMusic/addRecom",recomObj));
  }
  getAllMusicList():Observable<Array<any>>{
    console.log("Inside retriving All list");
    return (this.httpClient.get<any>(`http://localhost:8001/auth/verfication/favMusic/getallFav`));
  }
  getAllRecommendation():Observable<Array<any>>{
    console.log("Inside retriving All list");
    return (this.httpClient.get<Array<any>>(`http://localhost:8001/auth/verfication/favMusic/getAllRecom`));
  }
  saveComment(comment) : Observable<object> {  
     var baseUrl = 'http://localhost:8001/auth/verfication/favMusic/saveCmt';
    return this.httpClient.post(baseUrl,comment);  
  }  
  getComment(artistSongName):Observable<any>
  {
    var baseUrl = `http://localhost:8001/auth/verfication/favMusic/getCmt/${artistSongName}`;
    return this.httpClient.get(baseUrl);
  }
   
}

