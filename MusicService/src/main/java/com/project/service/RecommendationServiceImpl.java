package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.exception.RecommendationListEmpty;
import com.project.exception.SongNameDoesnotExists;
import com.project.model.Recommendation;
import com.project.repository.RecommendationRepository;

@Service
public class RecommendationServiceImpl implements RecommendationService {
	@Autowired
	private RecommendationRepository rf;

	@Override
	public List<Recommendation> findALL() throws RecommendationListEmpty {
		List<Recommendation> culist = rf.findAll();
		if (culist.isEmpty())
			throw new RecommendationListEmpty();
		return culist;
	}

	@Override
	public Recommendation saveRecom(Recommendation mf) throws SongNameDoesnotExists {
		System.out.println("Inside recommendation");
		Optional<Recommendation> o = rf.findById(mf.getArtistSongName());
		Recommendation rm = new Recommendation();
		if (o.isPresent()) {
			Recommendation r = o.get();
			rm.setArtistSongName(r.getArtistSongName());
			rm.setRecommendationCount(r.getRecommendationCount() + 1);
			rm.setAlbumSingle(r.getAlbumSingle());
			rm.setArtist_name(r.getArtist_name());
			rm.setImage(r.getImage());
			rm.setTrackSingle(r.getTrackSingle());

		} else {
			rm.setArtistSongName(mf.getArtistSongName());
			rm.setRecommendationCount(1);
			rm.setAlbumSingle(mf.getAlbumSingle());
			rm.setArtist_name(mf.getArtist_name());
			rm.setImage(mf.getImage());
			rm.setTrackSingle(mf.getTrackSingle());
		}
		System.out.println("Showing object");
		System.out.println(rm.toString());
		Recommendation rs = rf.save(rm);
		return rs;
	}

}
