import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { MusicServiceService } from '../music-service.service';
import { Artist } from '../artist';
import { DataStoreTransferService } from '../data-store-transfer.service';
import { SpotifyServService } from '../spotify-serv.service';
import { RouterServiceService } from '../router-service.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SpringDataServiceService } from '../spring-data-service.service';
import { UserFavService } from '../user-fav.service';
import { LoadToFav } from '../load-to-fav';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { LoginServiceService } from '../login-service.service';
import { Recommendation } from '../recommendation';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  temp: Array<any>;
  arr: Array<Artist>=[];
  temp1: Array<any>=[];
  objArtist: Artist;
  public show:boolean = false;
  public buttonName:any = 'Play';
  videoId: string;
  artistHitId: string;
  checking_artistName: string;
  display_youtube:boolean = false;
  youtbeVideoId: string;
  public safeURL:  SafeResourceUrl;
  searchQuery: string;
  serachQueryArray: Array<any>;
  searchqueryObject: Array<Artist>=[];
  currentArtistId: string;
  img: string;
  tempar: Array<any>;
  selected = 0;
  artistDetails: string ="";
  similiarArtist: Array<string>=[];
  similArtistNm: Array<string>=[];
  similarAtristimage: Array<string>=[];
  message:string="Already added to favourite list";


  constructor(private loginServ: LoginServiceService,private _snackBar: MatSnackBar, private FavStorageService: SpringDataServiceService,private userMapService: UserFavService,private service: MusicServiceService, private domsan:DomSanitizer,private router :Router,route:ActivatedRoute,private rout: RouterServiceService, private dataGetService: DataStoreTransferService,private youTubeService:SpotifyServService) { 
    // route.params.subscribe(val => {
    //   this.ngOnInit();
    // });

    console.log("constructor called");
  }




  ngOnInit() {
    console.log("ngOnit called");
  
       
    this.temp=[];
    this.temp1=[];
    this.arr = [];
    this.serachQueryArray = [];
    this.img ="";
    this.objArtist = new Artist();
    console.log("inside search parent-child funaction");
    console.log(this.dataGetService.togetArtistName());
    this.search();
  }

  toggle() {
    this.show = !this.show;
   

    if(this.show)  {
      this.buttonName = "Hide";

    }
    else
      this.buttonName = "Play";
     
  }
  click_fav(favObject,favSongList){
    console.log('inside Favourites');
    console.log(favObject);
    console.log(favSongList);
    this.dataGetService.toSetFavObject(favObject,favSongList);
    this.FavStorageService.addDat(this.dataGetService.toGetFavObject()).subscribe((data)=>{
      console.log("Data posted");
    },
    error => {
      console.log(error);
    });
    let loadDat = new LoadToFav();
    let loadExistingDataofUser : Array<any> =[];
    this.userMapService.gettingUserFavMap(this.loginServ.getLoggedInUserToke()).subscribe((data)=>{
      console.log('inside UserMAP getting user info');
      console.log(data);
      if(!data){
        loadDat.emailUser = this.loginServ.getLoggedInUserToke();
        loadDat.userPref = [this.dataGetService.toGetFavObject().artistSongName];
        console.log("New User added");
        this.userMapService.sendingUserFavMap(loadDat).subscribe((data) =>{
          console.log("Data for new user inserted");
          if(localStorage.getItem("authtoken")){
            
          }
          else
            this.rout.gotoLogin();

        },
        error=>{
          console.log("Couldn't log data for new user");
          if(localStorage.getItem("authtoken")){
            this.router.navigate(['./dashboard']);
            // console.log("ALready added!");
          }
          else
            this.rout.gotoLogin();
        });
        this.router.navigate(['./dashboard']);
      }
      else{
         console.log("Already contains user prefernce!");
         console.log(data['emailUser']);
         loadExistingDataofUser = data['userPref'];
         //if(this.dataGetService.toGetFavObject().artistSongName!)
         if(!loadExistingDataofUser.includes(this.dataGetService.toGetFavObject().artistSongName)){
         
         loadExistingDataofUser.push(this.dataGetService.toGetFavObject().artistSongName);
         loadDat.emailUser = this.loginServ.getLoggedInUserToke();
         loadDat.userPref = loadExistingDataofUser;
         this.userMapService.sendingUserFavMap(loadDat).subscribe((data) =>{
          console.log("Data for existing user inserted");
          if(localStorage.getItem("authtoken")){
            this.router.navigate(['./dashboard']);
          }
          else
             this.rout.gotoLogin();

        },
        error=>{
          console.log("Couldn't log data for existing user");
          this.rout.gotoLogin();

          
        });


         console.log(loadExistingDataofUser);
      
      }
      else{
        console.log("User prefernce was already added!");
        if(localStorage.getItem("authtoken")){
          //this.router.navigate(['./dashboard']);
          console.log("Already added!");
          this.openSnackBar("Already added to favourite list");
        }
        else
           this.rout.gotoLogin();
      }
    }

    },
    error=>{
      console.log("Inside Error");
      console.log(error);
      this.rout.gotoLogin();
    }
    );


    
  }
  openSnackBar(message) {
    this._snackBar.open(message,'Close'),{
      duration: 2000
    };
  }
  execute(){
    console.log("Inside Execute Function!");
    console.log(this.display_youtube);
    this.display_youtube = true;
    console.log("inside youtube function");
    console.log(this.videoId);
    this.youtbeVideoId= "https://www.youtube.com/embed/"+this.dataGetService.togetVideoId()+"?";
    console.log(this.youtbeVideoId);
    this.safeURL = this.domsan.bypassSecurityTrustResourceUrl(this.youtbeVideoId);
    

  }
  searchYoutube(songName,artistNm){
      var searchQuery;
      console.log("Inside searchYoutube");
      console.log(songName);
      console.log(artistNm);
      searchQuery = songName[0]+" by "+ artistNm+ " official video";
      console.log("SearchQuery");
      console.log(searchQuery);
      this.youTubeService.searchMusic(searchQuery).subscribe((data) =>{
      console.log("Inside funcion of youtube");
      this.videoId = data['items'][0]['id']['videoId'];
      console.log(this.videoId);

      console.log(data);
      this.dataGetService.toSetVideoId(this.videoId);
      this.selected =2;
      this.execute();
      //this.rout.navigate(['/youtubelink']);
      

     },
      error => {console.log("Eroor");
    }
      );
     // this.rout.goToYoutube();
  }

  randomSearch(){
 
  
    console.log("Inside Random Search Component!")
    this.searchQuery=this.dataGetService.togetArtistName();
    this.service.getRandomSearch(this.searchQuery).subscribe(data =>{
      console.log(data['search']['data']['tracks']);
      this.serachQueryArray = data['search']['data']['tracks'];
      for( var i =0;i<this.serachQueryArray.length;i++){
        console.log("inside for loop");
        var arObj = new Artist();
        this.currentArtistId=this.serachQueryArray[i]['artistId'];
  
  
        arObj.id= this.currentArtistId;
        arObj.artist_name = this.serachQueryArray[i]['artistName'];
        arObj.albumSingle = this.serachQueryArray[i]['albumName'];
        arObj.trackSingle = this.serachQueryArray[i]['previewURL']
        arObj.artistSongName = this.serachQueryArray[i]['name'];
        console.log('Music Service');
  
        
        this.searchqueryObject.push(arObj);
  
        
        
      
  
      }
      // console.log("last Artist id");
      // console.log(this.currentArtistId);
  
    });
    // console.log("Outside sevice");
    // console.log(this.searchqueryObject);
  


    //



    // private String artistSongName;
    // private int recommendationCount;
    // private String artist_name;
    // private String image;
  
    // private String albumSingle;
    // private String trackSingle;
   }
   //Search bY ARtist
   recommend(songName,artistNm,artObj){

     console.log("Recommended");
     console.log(artistNm);
     console.log(songName);
     console.log(songName[0]);
     var newObj = new Recommendation();
     newObj.artistSongName = songName[0];
     newObj.recommendationCount = 1;
     newObj.artist_name = artistNm;
     newObj.image = artObj.image;
     newObj.albumSingle = songName[2];
     newObj.trackSingle = songName[1];
   
    
    
     //newObj
     
     this.FavStorageService.saveRecommendation(newObj).subscribe(data=>{
       console.log("Added to Recommendation List");
     },
     error=>{
       console.log(error);
       console.log("Error in recommendation service!");
     });
   }

  search() {
    var i,j;
    var name;
    //var id;
     
     //console.log("inside search parent-child funaction");
     //var objArtist: Artist = new Artist();
     this.objArtist = new Artist();
     //console.log(this.dataGetService.togetArtistName());
    this.service.getartistname(this.dataGetService.togetArtistName()).subscribe(
      data => {
     
        
        this.temp = data['search']['data']['artists'];
        // console.log("Data");
        // console.log(this.temp);
        this.artistHitId = this.temp[0]['id'];
        this.objArtist.id =this.temp[0]['id'];
        this.objArtist.artist_name = this.temp[0]['name'];
        this.checking_artistName=  this.temp[0]['name'];
        //this.objArtist.album_url = this.temp[0]['links']['albums']['href'];
        this.service.getimageUrl(this.artistHitId).subscribe(data =>{
          this.objArtist.image= data['images'][0]['url'];
        });
       this.service.getArtistTracks(this.artistHitId).subscribe(data =>{
         this.temp1=data['tracks'];
        //  console.log(this.temp1);
        //  console.log("Inside artist tracls");
         var dumy_song=[];
         var dumy_album_url=[];
         var dumy_album_name=[];
         for(var i =0 ;i<this.temp1.length;i++)

         {
          //  console.log("inside func  track");
          //  console.log(this.temp1[i]['name']);
           dumy_song.push([this.temp1[i]['name'],this.temp1[i]['previewURL'],this.temp1[i]['albumName']]);

         }

         this.objArtist.song_name = dumy_song;

       });
       console.log("Artist Info");
       this.service.getArtistDetialsById(this.objArtist.id).subscribe(data =>{
         console.log("Inside artist info for artist details");
         console.log(data);
         this.artistDetails = data['artists'][0]['blurbs'][0]+" "+data['artists'][0]['blurbs'][1]+" "+data['artists'][0]['blurbs'][2];
         console.log("bsjbfjbdf");
         console.log(this.artistDetails);
         if(this.artistDetails  == undefined)
           this.artistDetails= " ";

       },error=>{
         console.log(error);
         console.log("Inside error for artist details");
       }
       );
       console.log("arist details");
       console.log(this.artistDetails);
       
       


          

            
        // this.objArtist.album_name=ar_albums;
            
        //this.arr.push(objArtist);
        console.log("Checking for empty");
        //console.log(this.arr);
       
      });
      console.log("Checking Final data object");
      console.log(this.objArtist);
  }

}
