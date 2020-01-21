import { Component, OnInit } from '@angular/core';
import { NewGenreRelease } from '../new-genre-release';
import { MusicServiceService } from '../music-service.service';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.css']
})
export class NewReleaseComponent implements OnInit {
  temp:Array<any>;
  arr:Array<NewGenreRelease> = [];
  temp1:Array<any>;

  constructor(private service: MusicServiceService) { }

  ngOnInit() {
    this.temp=[];
    this.getnewrelease();
    this.temp1=[];

  }
  getnewrelease() {
     
    
    var id;
    this.service.gettopgenre().subscribe(data =>
      {
        this.temp = data['tracks'];
      console.log(this.temp.length);
      for (let i = 1; i <=this.temp.length; i++) {
        var n: NewGenreRelease = new NewGenreRelease();
        n.album_id=this.temp[i]['albumId'];
        n.album_name = this.temp[i]['albumName'];
        n.mp3url = this.temp[i]['previewURL'];
      console.log("jdydyd");
      // console.log(id);
        this.service.getgenreimage(n.album_id).subscribe(data =>
          {
            this.arr[0]['image']=data['images'][0]['url'];
            this.arr[i]['image']=data['images'][0]['url'];
            console.log(this.arr[i]['image']);
          });
          this.arr.push(n);
          console.log(this.arr);
      }
    })

}
}
