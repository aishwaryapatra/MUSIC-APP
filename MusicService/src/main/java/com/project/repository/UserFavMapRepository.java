package com.project.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.model.UserFavMap;

public interface UserFavMapRepository extends MongoRepository<UserFavMap, String> {

	public UserFavMap findByEmailUser(String id);

}
