package com.project.service;

import java.util.List;

import com.project.exception.RecommendationListEmpty;
import com.project.exception.SongNameDoesnotExists;
import com.project.model.Recommendation;

public interface RecommendationService {
	public List<Recommendation> findALL() throws RecommendationListEmpty;

	public Recommendation saveRecom(Recommendation mf) throws SongNameDoesnotExists;

}
