package com.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.exception.MusicAlreadyExistsException;
import com.project.model.UserFavMap;
import com.project.repository.UserFavMapRepository;

@Service
public class UserFavMapServiceImpl implements UserFavMapService {
	@Autowired
	private UserFavMapRepository bp;

	@Override
	public UserFavMap getFavMapByEmailUser(String id) throws MusicAlreadyExistsException {
		UserFavMap o = null;

		try {
			o = bp.findByEmailUser(id);
			System.out.println("Inside UserFavMap");
			System.out.println(o);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return o;
	}

	@Override
	public UserFavMap saveList(UserFavMap ufm) throws MusicAlreadyExistsException {

		System.out.println(ufm.getUserPref());
		Optional<UserFavMap> o = bp.findById(ufm.getEmailUser());

		System.out.println("not exist");
		UserFavMap mk = bp.save(ufm);

		return mk;
	}

}
