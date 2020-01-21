package com.project.service;

import java.util.List;

import com.project.exception.MusicAlreadyExistsException;
import com.project.exception.MusicFavListEmpty;
import com.project.model.MusicFav;

public interface MusicFavService {
	public List<MusicFav> findALL() throws MusicFavListEmpty;

	public MusicFav getFavMusicById(String id) throws MusicAlreadyExistsException;

	public MusicFav saveFav(MusicFav mf) throws MusicAlreadyExistsException;
}
