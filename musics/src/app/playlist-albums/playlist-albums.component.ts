import { Component, OnInit } from '@angular/core';
import { AlbumInPlaylist } from '../album-in-playlist';
import { MusicServiceService } from '../music-service.service';

@Component({
  selector: 'app-playlist-albums',
  templateUrl: './playlist-albums.component.html',
  styleUrls: ['./playlist-albums.component.css']
})
export class PlaylistAlbumsComponent implements OnInit {
  temp:Array<any>;
  arr:Array<AlbumInPlaylist>= [];
  arr1:Array<AlbumInPlaylist>=[];
  temp1:Array<any>


  constructor(private service:MusicServiceService) { }

  ngOnInit() {
    this.temp=[];
    this.temp1=[];
    this.displayplaylist();
  }
  displayplaylist() {
    
    var id;
    this.service.getplaylistalbum().subscribe(data => {
      this.temp=data['playlists'];
      
      for(let i=0;i<this.temp.length;i++) {
        var p:AlbumInPlaylist=new AlbumInPlaylist();
        p.id=this.temp[i]['id'];
        p.name=this.temp[i]['name'];
        p.fav_count=this.temp[i]['favoriteCount'];
        p.image=this.temp[i]['images'][0]['url'];
       //this.arr.push(p);
        this.arr.sort(function(a, b){
          return b.fav_count-a.fav_count
      })
    
      
      console.log(this.arr);
      console.log(id);
    
    this.service.getplaylistid(p.id).subscribe(data1 => {
      //this.temp1=data['tracks'];
      this.arr[i]['track_name'][0]=data1['tracks'][0]['name'];
      this.arr[i]['track_name'][1]=data1['tracks'][1]['name'];
      this.arr[i]['track_name'][2]=data1['tracks'][2]['name'];
    this.arr[i]['mp3_url'][0]=data1['tracks'][0]['previewURL'];
   this.arr[i]['mp3_url'][1]=data1['tracks'][1]['previewURL'];
     this.arr[i]['mp3_url'][2]=data1['tracks'][2]['previewURL'];
        //
      
      
        
    });
    this.arr.push(p);
    
  
  }

  this.arr[(this.arr.findIndex(v => v.name === "Top Tracks in US"))]=this.arr[3];
  
  });
  
  
  console.log("aish");
  
  console.log(this.arr);
  }

  


}

