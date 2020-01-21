import { Component, OnInit } from '@angular/core';

import { LoginServiceService } from '../login-service.service';
import { RouterServiceService } from '../router-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedUserName: string;
  imgURL: string;

  constructor(private loginService: LoginServiceService,private rout: RouterServiceService) {}

  ngOnInit() {
    if(!localStorage.getItem("authtoken")){
      this.rout.gotoLogin();
    }
    this.loggedUserName= this.loginService.getLoggedInUserToke();
    this.loginService.getimage(this.loggedUserName).subscribe(data => {
      console.log(data);
      this.imgURL = data['image'];
      console.log(this.imgURL);
    },
    error =>{
      console.log(error);
    })
  }
  logout() {
    localStorage.removeItem("userKey");
    localStorage.removeItem("authtoken");

  }

}
