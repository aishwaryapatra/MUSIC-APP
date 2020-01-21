import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Recommendation {
    artistSongName: string;
    recommendationCount: number;
    artist_name:string;
    image:string;
    albumSingle: string;
    trackSingle: string;
    constructor(){
        this.artistSongName = "";
        this.recommendationCount= 0;
        this.albumSingle = "";
        this.artist_name ="";
        this.image ="";
        this.trackSingle ="";
    }

}
