package com.project.service;

import java.util.List;

import com.project.exception.DuplicateComment;
import com.project.model.Comment;

public interface CommentService {

	public List<Comment> findBySongName(String song);

	public Comment saveComment(Comment cm) throws DuplicateComment;
}
