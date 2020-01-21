import { Component, OnInit } from '@angular/core';
import { UserFavService } from '../user-fav.service';
import { LoginServiceService } from '../login-service.service';
import { SpringDataServiceService } from '../spring-data-service.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  loggedUser: string;
  dump: Array<string>=[];
  arrayCount: Array<any>=[];
  arrayCountObject: Array<any>=[];
  tempArray: Array<any> = [];

  constructor( private userMap:UserFavService,private loginService: LoginServiceService, private springSer: SpringDataServiceService) { }

  ngOnInit() {
    this.loggedUser = this.loginService.getLoggedInUserToke();
    this.userMap.gettingUserFavMap(this.loggedUser).subscribe(data =>{
      console.log(typeof(data));
      console.log(data);
      this.dump = data['userPref'];
      console.log("-------------------------------inside recommendation");
      console.log(this.dump);


  });
  this.springSer.getAllMusicList().subscribe(
    data=> {console.log(data);
      console.log("Inside get all music");
    },error=>{
      console.log("error in fetching al the details of music ");
         
    }
  );
  this.springSer.getAllRecommendation().subscribe(
    data =>{
      console.log('inside gettin all recommendation!');
      console.log(data);
      this.arrayCount = data;
      this.arrayCount.forEach(element => {
        this.tempArray.push(element.artistSongName  );
      });
       this.arrayCount.sort((a, b) => (a.recommendationCount < b.recommendationCount) ? 1 : -1);

    },
    error =>{
      console.log("Inside error of all recommendation");
    }
  );

}


}
