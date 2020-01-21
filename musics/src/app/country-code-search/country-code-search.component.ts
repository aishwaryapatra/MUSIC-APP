import { Component, OnInit } from '@angular/core';
import {Bollywood} from '../bollywood';
import { Chinise } from '../chinise';
import { BollyTracks } from '../bolly-tracks';
import { Spanish } from '../spanish';
import { Arabic } from '../arabic';
import { MusicServiceService } from '../music-service.service';

@Component({
  selector: 'app-country-code-search',
  templateUrl: './country-code-search.component.html',
  styleUrls: ['./country-code-search.component.css']
})
export class CountryCodeSearchComponent implements OnInit {
  b: Bollywood;
  temp3:Array<any>;
  array: Array<Bollywood>;
  temp: Array<any>;
  bt: BollyTracks;
  arr: Array<BollyTracks>;
  temp2: Array<any>;
  spain: Spanish;
  arrayS: Array<any>;
  arabic:Arabic;
  arrayC:Array<Chinise>;
  arrayA:Array<Arabic>;
  c:Chinise;

  constructor(private s: MusicServiceService) {
    this.b = new Bollywood();
    this.array = [];
    this.temp = [];
    this.temp2 = [];
    this.bt = new BollyTracks();
    this.arr = [];
    this.spain = new Spanish();
    this.arrayS=[];
    this.arrayA=[];
    this.arrayC=[];

  }

  ngOnInit() {

    this.fetchBollywood();
    this.fetchSpanish();
    this.fetchArabic();
    this.fetchChinese();
  }

  fetchBollywood() {
    this.temp = [];
    this.s.getCountrySearch("Bollywood").subscribe(
      data => {
        this.temp = data['search']['data']['albums'];
        for (let i = 0; i < 5; i++) {
          var obj: Bollywood = new Bollywood();
          obj.id = this.temp[i]['id'];
          this.s.getTracks(obj.id).subscribe(
            data => {
              //this.temp2=data['tracks'];
              this.array[i]['name'] = data['tracks'][0]['name'];
              this.array[i]['mp3url'] = data['tracks'][0]['previewURL'];
              this.array[i]['artist'] = data['tracks'][0]['artistName'];
              console.log(this.array);
            },
            error => { console.log(error); }
          )
          this.array.push(obj);
        }
        console.log(this.array);
      },
      error => {
        console.error();
      }
    );
  }


  //Fetch Spanish Songs
  fetchSpanish() {
    this.temp = [];
    this.s.getCountrySearch("Spanish").subscribe(
      data => {
        this.temp2 = data['search']['data']['albums'];
        for (let i = 0; i < 5; i++) {
          var s: Spanish = new Spanish();
          s.id = this.temp2[i]['id'];
          this.s.getTracks(s.id).subscribe(
            data => {
              this.arrayS[i]['name'] = data['tracks'][0]['name'];
              this.arrayS[i]['previewURL'] = data['tracks'][0]['previewURL'];
              this.arrayS[i]['artist'] = data['tracks'][0]['artistName'];
              console.log(this.arrayS);
            },
            error => {
              console.log(error);
            }
          )
          this.arrayS.push(s);
        }
        console.log(this.arrayS);
      },
      error => {
        console.log(error);
      }
    )
  }

  //Fetch Arabic Songs
  fetchArabic() {
    this.temp = [];
    this.s.getCountrySearch("Arabic").subscribe(
      data => {
        this.temp2 = data['search']['data']['albums'];
        for (let i = 0; i < 5; i++) {
          var s: Arabic = new Arabic();
          s.id = this.temp2[i]['id'];
          this.s.getTracks(s.id).subscribe(
            data => {
              this.arrayA[i]['name'] = data['tracks'][0]['name'];
              this.arrayA[i]['previewURL'] = data['tracks'][0]['previewURL'];
              this.arrayA[i]['artist'] = data['tracks'][0]['artistName'];
              console.log(this.arrayA);
            },
            error => {
              console.log(error);
            }
          )
          this.arrayA.push(s);
        }
        console.log(this.arrayA);
      },
      error => {
        console.log(error);
      }
    )
  }
//Fetch Chinese Songs
  fetchChinese() {
    this.temp = [];
    this.s.getCountrySearch("Chinise").subscribe(
      data => {
        this.temp3 = data['search']['data']['albums'];
        for (let i = 0; i < 5; i++) {
          var s: Chinise= new Chinise();
          s.id = this.temp3[i]['id'];
          this.s.getTracks(s.id).subscribe(
            data => {
              this.arrayC[i]['name'] = data['tracks'][0]['name'];
              this.arrayC[i]['previewURL'] = data['tracks'][0]['previewURL'];
              this.arrayC[i]['artist'] = data['tracks'][0]['artistName'];
              console.log(this.arrayC);
            },
            error => {
              console.log(error);
            }
          )
          this.arrayC.push(s);
        }
        console.log(this.arrayC);
      },
      error => {
        console.log(error);
      }
    )
  }



}

