import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyServService {

  apiKey : string = 'AIzaSyCVorEOyLkyB1mgHiwfTIzO1F8vtehxuyE';
  constructor(public httpClient: HttpClient,handler: HttpBackend) { 

    this.httpClient = new HttpClient(handler);
}
  getVideosForChanel(channel, maxResults): Observable<Object> {
    let headers = new Headers();
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.httpClient.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
  searchMusic(songName) {
    console.log("Inside searchMusic service ");
    console.log("hii");
    console.log(songName);
    console.log("Replace string function");
    var replaceString: string;
    replaceString = "%20"+songName.split(" ").join("%20");
    console.log(replaceString);

    // var authToken = 'BQDjKZ5Bkh3SCL9TycEgwrGmFFT8EdoEB33NsS6w3ekN29a9f0UUIHSKWNsI_BJ0EWaZxbQ9S_CxxYiJDl89kUIvO8ezz-ddndBp32qB-Fv8muPX79tcwS2eoUuazuNj09ADj_mmv6QR6B_KZITfJdjizU3ATUWg7bs5B6FZTf5IxaZRTdNvjNO0qYY7eSQVLU5UMVZF9VrHP5plGA6eL9KJGHNlDkaQB3AfVSUX5nhOEtbFxGSUOpQIsr7O71sOBw0AM-39Plg-6YuRqXR9xnx86bR2Rip8Ow';
    // let headers =  new HttpHeaders();
    // headers.append('Authorization', 'Bearer ' + authToken);



    return this.httpClient.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${replaceString}&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyCVorEOyLkyB1mgHiwfTIzO1F8vtehxuyE`);
  }
}