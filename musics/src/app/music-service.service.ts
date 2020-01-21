import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  arrayList: Array<string> =[];

  constructor(private http:HttpClient,handler: HttpBackend ) { 
    this.http = new HttpClient(handler);
  }
  gettopgenre() {
    return this.http.get<any>(`http://api.napster.com/v2.2/genres/g.397/tracks/top?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3`)
  }
  getgenreimage(id) {
    return this.http.get(`http://api.napster.com/v2.2/albums/${id}/images?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4`)
  }

  getnewreleaseimage(id) {
    return this.http.get<any>(`http://api.napster.com/v2.2/albums/${id}/images?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3`)
  }

  getSimilarArtist(value) {
    return(this.http.get<any>("http://api.napster.com/v2.2/artists/"+value+"/similar?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"));

  }
  getArtistDetialsById(id):Observable<any>{
    console.log("Id for artist details  service");

    console.log(id)
    //return this.http.get<any>(`http://api.napster.com/v2.2/artists/${{id}}?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3`);\\


    return this.http.get<any>("http://api.napster.com/v2.2/artists/"+id+"?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3");
  }
  getCountrySearch(language){
    var apiUrl=`http://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=${language}`;

    return this.http.get<any>(`${apiUrl}`);
  }
  getTracks(id):Observable<any>
  {
    return this.http.get<any>(`http://api.napster.com/v2.2/albums/${id}/tracks?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4`);
  }
  getRandomSearch(name){
    return this.http.get<any>(`http://api.napster.com/v2.2/search?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3&query=${name}`);
  }
  getimageUrl(name){
    return this.http.get<any>(`http://api.napster.com/v2.2/artists/${name}/images?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3`);
  }
  getArtistTracks(name){
    return this.http.get<any>(`http://api.napster.com/v2.2/artists/${name}/tracks/top?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3&limit=20`);
  }

  getartistname(name): Observable<any>
  {
    //console.log(name);
    return this.http.get<any>(`http://api.napster.com/v2.2/search?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3&query=${name}&type=artist`);
  }
  getalbumnamebyid(id) {
    return this.http.get<any>(`http://api.napster.com/v2.2/artists/${id}/albums/top?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3`)
  }
  gettopplaylist(): Observable<any> {
    return this.http.get<any>("http://api.napster.com/v2.2/playlists/featured?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3&limit=5");

  }
  getnewrelease() {
    return this.http.get<any>(`http://api.napster.com/v2.2/genres/g.397/albums/new?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3`);
  }
  getplaylistalbum() {
    return this.http.get<any>(`http://api.napster.com/v2.2/playlists?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3`)
  }
  getplaylistid(id) {
    console.log("aish");
    console.log(id);
    return this.http.get<any>(`http://api.napster.com/v2.2/playlists/${id}/tracks?apikey=NmNjMzhiYzItNWQ0ZC00OGYzLWFmMmMtY2FiOGE4ZjY2N2Q3&limit=5`)
  }
}
