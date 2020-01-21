import { Injectable, Output, EventEmitter } from '@angular/core';
import { Artist } from './artist';
import { ArtistSent } from './artist-sent';

@Injectable({
  providedIn: 'root'
})
export class DataStoreTransferService {

  private favStorage: Artist;
  private passArtistName: string;
  private vidId: string;
  private storageVar: string;
  private favArray: ArtistSent = new ArtistSent();
  private objectComment: string;

  constructor() { }
  toSetFavObject(artistObject, artistSong){
    console.log("This is fav service");
    console.log(artistObject);
    console.log(artistSong);
    this.favArray.albumSingle =artistSong[2];
    this.favArray.trackSingle= artistSong[1];
    this.favArray.artistSongName = artistSong[0];


    this.favArray.id = artistObject.id;
    this.favArray.image = artistObject.image;
    this.favArray.artist_name = artistObject.artist_name;

    console.log("This is fv array");
    console.log(this.favArray);
  }
toGetFavObject(){
  return this.favArray;
}

  toSetArtistName(val: string){
    this.passArtistName = val;

  }
  togetArtistName() {
    return this.passArtistName;
  }
  toSetVideoId(val: string){
    this.vidId = val;

  }
  togetVideoId() {
    return this.vidId;
  }


  toSetStorageVariable(val: string){
    this.storageVar = val;

  }
  toSetStorageVariabl() {
    return this.storageVar;
  }
  tostoreComment(val: string){
  this.objectComment= val;  
 }
 togetCommentObj(){
   return this.objectComment;}
}