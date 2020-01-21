import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { UserRegister } from '../user-register';
import { RouterServiceService } from '../router-service.service';
@Component({
  selector: 'app-resgistration-component',
  templateUrl: './resgistration-component.component.html',
  styleUrls: ['./resgistration-component.component.css']
})
export class ResgistrationComponentComponent implements OnInit {
  registerForm: FormGroup;
  imgURL: string;
  user: UserRegister = new UserRegister();
  firstName:FormControl;
  lastName:FormControl;
  email:FormControl;
  password:FormControl;
  gender:FormControl;
  image:FormControl;
  constructor(private formBuilder: FormBuilder,  private userService: RegistrationServiceService,private route:RouterServiceService) { }
  fileSelected(event) {
    console.log(event);
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event => {
      this.imgURL = reader.result.toString();
    })
  }
  ngOnInit() {
    if(localStorage.getItem("authtoken")){
      this.route.gotoDashboard();
    }
    this.email = new FormControl('', [Validators.required ]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.firstName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]);
    this.lastName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]);
    this.gender=new FormControl('',Validators.required);
    
    this.registerForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      gender: this.gender,
      image: this.image
    });
    
  }
  
  onSubmit() {
    // console.log(this.registerForm.value);
    this.user.firstName = this.registerForm.value.firstName;
    this.user.lastName = this.registerForm.value.lastName;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    this.user.gender = this.registerForm.value.gender;
    this.user.image=this.imgURL;
    console.log(this.registerForm.value);
    this.userService.register(this.user).subscribe(data => {
      
      console.log("Sucessfully Registered");
      this.route.gotoLogin();
    });
    
  }
}
