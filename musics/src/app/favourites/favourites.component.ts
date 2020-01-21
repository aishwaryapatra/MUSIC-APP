import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { LoadToFav } from '../load-to-fav';
import { DataStoreTransferService } from '../data-store-transfer.service';
import { UserFavService } from '../user-fav.service';
import { SpringDataServiceService } from '../spring-data-service.service';

import { ArtistSent } from '../artist-sent';
import { RouterServiceService } from '../router-service.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  loggedUser: string;
  gettingFavListofLoggedUser : Array<any> = [];
  private loadObject: LoadToFav = new LoadToFav();
  dumpingFavArtistObj : Array<any> =[];
  displayedColumns: string[] = ['artistSongName','artist_name','trackSingle'];
  objArtsent: ArtistSent;
  dump: Array<string>=[];
  dump2: Array<ArtistSent>=[];
  autoplaybool: boolean = false;


  
  constructor(private loginService: LoginServiceService,private dataStore: DataStoreTransferService,private rout: RouterServiceService, private userMap:UserFavService, private FavArtService: SpringDataServiceService) { }


  playSound(name) {
    // var sound = document.getElementById(name);
    this.autoplaybool = true;
}


  ngOnInit() {
    //this.loadToFav();
    this.loadFromUserMapNew();
  //  this.getGroupBY();
    console.log("inside ngInit" + this.gettingFavListofLoggedUser);
   
  }
  loadFromUserMapNew(){
    this.loggedUser = this.loginService.getLoggedInUserToke();
    this.userMap.gettingUserFavMap(this.loggedUser).subscribe(data =>{
      console.log(typeof(data));
      console.log(data);
      this.dump = data['userPref'];
      
      console.log(typeof(this.dump));
      console.log(this.dump);
      for(let i=0;i<this.dump.length;i++){
        //console.log("hii");
        //console.log(this.dump[i]);
        this.FavArtService.getData(this.dump[i]).subscribe(data =>{
          //console.log("Inside Data");
          console.log(data);
          this.dump2 = data;
          this.objArtsent= new ArtistSent();
          this.objArtsent.albumSingle = this.dump2['albumSingle'];
          this.objArtsent.artistSongName = this.dump2['artistSongName'];
          this.objArtsent.artist_name = this.dump2['artist_name'];
          this.objArtsent.image = this.dump2['image'];
          this.objArtsent.trackSingle = this.dump2['trackSingle'];
          this.objArtsent.id = this.dump2['id'];

          
          this.gettingFavListofLoggedUser.push(this.objArtsent);
          console.log(this.gettingFavListofLoggedUser.length);
          //console.log(data);
      }
    );
      }
  });
  console.log(this.gettingFavListofLoggedUser.length);
  this.displayedColumns = this.gettingFavListofLoggedUser;
  
  }


  
Onclick(songObject){
  console.log(songObject['artistSongName']);
  var value:string;
  value = songObject['artistSongName'];
  console.log(typeof(value));
  this.dataStore.tostoreComment(value);
  this.rout.goToComment();
}







}