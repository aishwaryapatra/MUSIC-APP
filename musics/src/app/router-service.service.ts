import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  constructor(private rout :Router) { }
  goToYoutube(){
     this.rout.navigate(['youtubelink']);
  }
  goToComment(){
    this.rout.navigate(['dashboard/comment']);
  }
  goToHome(){
    this.rout.navigate(['home']);
  }
  gotoDashboard(){
    this.rout.navigate(['dashboard']);
  }
  gotoLogin(){
    this.rout.navigate(['login']);
  }
}
