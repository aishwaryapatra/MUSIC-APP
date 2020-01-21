package com.project.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.model.Recommendation;

public interface RecommendationRepository extends MongoRepository<Recommendation, String> {

}
