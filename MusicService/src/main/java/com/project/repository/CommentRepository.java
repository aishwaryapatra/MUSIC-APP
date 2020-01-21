package com.project.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.model.Comment;

@Repository
public interface CommentRepository extends MongoRepository<Comment, Integer> {

	List<Comment> findByArtistSongName(String song);

}