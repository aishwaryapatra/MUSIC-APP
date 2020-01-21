import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { LoginServiceService } from '../login-service.service';
import { RouterServiceService } from '../router-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  u: User = new User();
  loginForm:FormGroup;
  email:FormControl;
  password:FormControl;
  constructor(private service:LoginServiceService,private rout:RouterServiceService) { }

  ngOnInit() {
    console.log(this.service.isLoggedIn);
    if(localStorage.getItem("authtoken")){
      this.rout.gotoDashboard();
    }
    this.email=new FormControl(),
    this.password=new FormControl(),
    this.loginForm=new FormGroup({
      email:this.email,
      password:this.password
    });
  }
  submit() {
    console.log(this.loginForm.value);
    this.u.email=this.email.value;
    this.u.password=this.password.value;

    this.service.login(this.loginForm.value).subscribe(data => {
      console.log(data);
      console.log("diusdniu");
      //var variabe = JSON.stringify(data);
      var jsondata = JSON.parse(data);
      console.log("variable");
      console.log(jsondata["token"]);
      localStorage.setItem("authtoken",jsondata["token"]);
      this.service.isLoggedIn = true;
      this.service.setLoggedInUserToken(this.loginForm.value.email);
      if(localStorage.getItem("authtoken"))
        this.rout.gotoDashboard();
    },
    error =>{
    console.log("Wrong Credentials!");}
    );
  }

}
