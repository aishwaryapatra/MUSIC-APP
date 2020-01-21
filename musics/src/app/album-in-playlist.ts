export class AlbumInPlaylist {
    id:string;
    track_name:string[];
    album_name:string[];
    fav_count:number;
    name:string;
    image:string;
    mp3_url:string[];
    constructor() {
        this.id='';
        this.fav_count;
        this.name='';
        this.image='';
        this.track_name=[];
        this.album_name=[];
        this.mp3_url=[];
    }
}