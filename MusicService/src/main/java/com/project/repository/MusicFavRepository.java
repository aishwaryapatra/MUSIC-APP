package com.project.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.model.MusicFav;

public interface MusicFavRepository extends MongoRepository<MusicFav, String> {

}
