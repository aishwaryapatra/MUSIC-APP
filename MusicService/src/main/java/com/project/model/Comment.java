package com.project.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "comment")
public class Comment {

	private String artistSongName;
	private String comment;
	private String emailUser;

	public Comment() {
		super();

	}

	public Comment(String emailUser, String artistSongName, String comment) {
		super();
		this.emailUser = emailUser;
		this.artistSongName = artistSongName;
		this.comment = comment;
	}

	public String getArtistSongName() {
		return artistSongName;
	}

	public String getComment() {
		return comment;
	}

	public String getEmailUser() {
		return emailUser;
	}

	public void setArtistSongName(String artistSongName) {
		this.artistSongName = artistSongName;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public void setEmailUser(String emailUser) {
		this.emailUser = emailUser;
	}

}
