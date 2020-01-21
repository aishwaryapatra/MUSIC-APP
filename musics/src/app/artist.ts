export class Artist {
    id:string;
    artist_name:string;
    image:string;
    artistSongName:string;
    albumSingle: string;
    trackSingle: string;
    album_name:string[];
    album_url:string[];
    song_name:string[];
    constructor() {
        this.id="";
        this.artist_name='';
        this.image='';
        this.album_name=[];
        this.album_url=[];
        this.song_name=[];
    }
}
