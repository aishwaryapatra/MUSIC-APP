import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-childdashboard',
  templateUrl: './childdashboard.component.html',
  styleUrls: ['./childdashboard.component.css']
})
export class ChilddashboardComponent implements OnInit {
  loggedUserName: string;
  imgURL: string;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {


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

}
