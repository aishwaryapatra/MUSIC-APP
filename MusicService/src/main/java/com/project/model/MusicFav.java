package com.project.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class MusicFav {
	private String albumSingle;
	private String artist_name;
	@Id
	private String artistSongName;
	private String id;

	private String image;
	private String trackSingle;

	public MusicFav() {
		super();

	}

	public MusicFav(String id, String artist_name, String image, String artistSongName, String albumSingle,
			String trackSingle) {
		super();
		this.id = id;
		this.artist_name = artist_name;
		this.image = image;
		this.artistSongName = artistSongName;
		this.albumSingle = albumSingle;
		this.trackSingle = trackSingle;

	}

	public String getAlbumSingle() {
		return albumSingle;
	}

	public String getArtist_name() {
		return artist_name;
	}

	public String getArtistSongName() {
		return artistSongName;
	}

	public String getId() {
		return id;
	}

	public String getImage() {
		return image;
	}

	public String getTrackSingle() {
		return trackSingle;
	}

	public void setAlbumSingle(String albumSingle) {
		this.albumSingle = albumSingle;
	}

	public void setArtist_name(String artist_name) {
		this.artist_name = artist_name;
	}

	public void setArtistSongName(String artistSongName) {
		this.artistSongName = artistSongName;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public void setTrackSingle(String trackSingle) {
		this.trackSingle = trackSingle;
	}

	@Override
	public String toString() {
		return "MusicFav [artistSongName=" + artistSongName + ", id=" + id + ", artist_name=" + artist_name + ", image="
				+ image + ", albumSingle=" + albumSingle + ", trackSingle=" + trackSingle + "]";
	}

}
