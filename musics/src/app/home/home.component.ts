import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpotifyServService } from '../spotify-serv.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[];
  public safeURL:  SafeResourceUrl;
  private unsubscribe$: Subject<any> = new Subject();

  searchStr: string;
  constructor(private spinner: NgxSpinnerService,private youTubeService: SpotifyServService, private domsan:DomSanitizer) { 
    var videoURL = 'https://www.youtube.com/watch?v=1ozGKlOzEVc';
    this.safeURL = this.domsan.bypassSecurityTrustResourceUrl(videoURL);
  }


  ngOnInit()  {

    // this.youTubeService.searchMusic().subscribe((data) =>{
    //   console.log(data);
    //  },
    //   error => {console.log("Eroor");
    // }
    //   );
      // this.spinner.show()
      // setTimeout(()=>
      // {
      //   this.spinner.hide()
      // },3000)
      // this.videos = [];
      // this.youTubeService
      //   .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
      //   .pipe(takeUntil(this.unsubscribe$))
      //   .subscribe(lista => {
      //     for (let element of lista["items"]) {
      //       this.videos.push(element)
      //     }
  
      //   });
    }
  // search(){
  //   console.log(this.searchStr);
  // }

}
