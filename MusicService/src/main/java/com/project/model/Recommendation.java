package com.project.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Recommendation {
	private String albumSingle;
	private String artist_name;
	@Id
	private String artistSongName;
	private String image;

	private int recommendationCount;
	private String trackSingle;

	public Recommendation() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Recommendation(String artistSongName, int recommendationCount, String artist_name, String image,
			String albumSingle, String trackSingle) {
		super();
		this.artistSongName = artistSongName;
		this.recommendationCount = recommendationCount;
		this.artist_name = artist_name;
		this.image = image;
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

	public String getImage() {
		return image;
	}

	public int getRecommendationCount() {
		return recommendationCount;
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

	public void setImage(String image) {
		this.image = image;
	}

	public void setRecommendationCount(int recommendationCount) {
		this.recommendationCount = recommendationCount;
	}

	public void setTrackSingle(String trackSingle) {
		this.trackSingle = trackSingle;
	}

	@Override
	public String toString() {
		return "Recommendation [artistSongName=" + artistSongName + ", recommendationCount=" + recommendationCount
				+ ", artist_name=" + artist_name + ", image=" + image + ", albumSingle=" + albumSingle
				+ ", trackSingle=" + trackSingle + "]";
	}

}
