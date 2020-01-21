import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { MusicServiceService } from '../music-service.service';

@Component({
  selector: 'app-top-playlist',
  templateUrl: './top-playlist.component.html',
  styleUrls: ['./top-playlist.component.css']
})
export class TopPlaylistComponent implements OnInit {
  temp:Array<any>;
  arr:Array<Playlist> = [];
  

  constructor(private service:MusicServiceService) { }

  ngOnInit() {
    this.temp=[];
    this.gettopplaylist();
  }
  gettopplaylist() {
    var i;
    this.service.gettopplaylist().subscribe(data => {
      console.log(data);
      this.temp = data['playlists'];
      console.log(this.temp.length);

      for (i = 0; i < this.temp.length; i++) {
        var p: Playlist = new Playlist();
        p.name = this.temp[i]['name'];
        p.image_url = this.temp[i]['images'][0]['url'];
        this.arr.push(p);
      }
        var x=this.arr.splice(2,1);
      

      console.log(this.arr);
      console.log(x);
    });
  }
}
