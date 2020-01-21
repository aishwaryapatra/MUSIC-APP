package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.exception.MusicAlreadyExistsException;
import com.project.exception.MusicFavListEmpty;
import com.project.model.MusicFav;
import com.project.repository.MusicFavRepository;

@Service
public class MusicFavServiceImpl implements MusicFavService {

	@Autowired
	private MusicFavRepository bp;

	@Override
	public List<MusicFav> findALL() throws MusicFavListEmpty {
		List<MusicFav> culist = bp.findAll();
		if (culist.isEmpty())
			throw new MusicFavListEmpty();
		return culist;
	}

	@Override
	public MusicFav getFavMusicById(String id) throws MusicAlreadyExistsException {
		Optional<MusicFav> o = bp.findById(id);
		if (!o.isPresent())
			throw new MusicAlreadyExistsException("Id doesnot exists!");
		// TODO Auto-generated method stub
		MusicFav bk = o.get();
		System.out.println("Inside Service of MUSICFav app");
		return bk;
	}

	@Override
	public MusicFav saveFav(MusicFav mf) throws MusicAlreadyExistsException {
		Optional<MusicFav> o = bp.findById(mf.getArtistSongName());
		if (o.isPresent())
			throw new MusicAlreadyExistsException("Entry already exists in the list");

		MusicFav mk = bp.save(mf);

		return mk;
	}

}
