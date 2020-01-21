package com.project.service;

import com.project.exception.MusicAlreadyExistsException;
import com.project.model.UserFavMap;

public interface UserFavMapService {
	public UserFavMap getFavMapByEmailUser(String id) throws MusicAlreadyExistsException;

	public UserFavMap saveList(UserFavMap ufm) throws MusicAlreadyExistsException;

}
