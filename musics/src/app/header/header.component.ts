import { Component, OnInit } from '@angular/core';
import { DataStoreTransferService } from '../data-store-transfer.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchString: string;
  constructor(private dataStore: DataStoreTransferService, private rout:Router,private service:LoginServiceService) { }

  ngOnInit() {
  //   this.rout.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
  //     this.rout.navigate(['Your actualComponent']);
  // }); 
  if(localStorage.getItem("authtoken")){
    this.service.isLoggedIn=true;
  }
  }
  searchStorage(event){
    if(event.key == "Enter"){
    
    this.searchString = event.target.value;
    console.log(this.searchString);
    this.dataStore.toSetArtistName(this.searchString);
    this.rout.navigateByUrl('/head', { skipLocationChange: true }).then(() => {
    this.rout.navigate(['/search']);
  }); 


    
    
    }}
   tologout(){
    localStorage.removeItem("authtoken");
    localStorage.removeItem("userKey");
    this.service.isLoggedIn = false;
    this.rout.navigate(['/home']);

   }
   tologin(){
     this.rout.navigate(['login']);
   }
   toregister(){
     this.rout.navigate(['register']);
   }
   todasboard(){
     this.rout.navigate(['dashboard']);
   }
  }


