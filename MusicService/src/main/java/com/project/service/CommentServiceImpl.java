package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.exception.DuplicateComment;
import com.project.model.Comment;
import com.project.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentRepository cr;

	@Override
	public List<Comment> findBySongName(String song) {

		List<Comment> commentList = cr.findByArtistSongName(song);

		return commentList;

	}

	@Override
	public Comment saveComment(Comment cm) throws DuplicateComment {
		Comment cmt = cr.save(cm);
		return cmt;
	}

}
