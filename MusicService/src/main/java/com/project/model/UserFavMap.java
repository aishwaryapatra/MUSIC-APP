package com.project.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class UserFavMap {
	@Id
	private String emailUser;
	private List<String> userPref;

	public UserFavMap() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserFavMap(String emailUser, List<String> userPref) {
		super();
		this.emailUser = emailUser;
		this.userPref = userPref;
	}

	public String getEmailUser() {
		return emailUser;
	}

	public List<String> getUserPref() {
		return userPref;
	}

	public void setEmailUser(String emailUser) {
		this.emailUser = emailUser;
	}

	public void setUserPref(List<String> userPref) {
		this.userPref = userPref;
	}

	@Override
	public String toString() {
		return "UserFavMap [emailUser=" + emailUser + ", userPref=" + userPref + "]";
	}

}
