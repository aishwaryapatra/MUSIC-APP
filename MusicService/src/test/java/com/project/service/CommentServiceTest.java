package com.project.service;

import java.util.Optional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.project.exception.DuplicateComment;
import com.project.model.Comment;
import com.project.repository.CommentRepository;

@RunWith(MockitoJUnitRunner.class)
public class CommentServiceTest {

	Comment cmt;

	@Mock
	private CommentRepository cr;
	Optional<Comment> optcmt;

	@InjectMocks
	private CommentServiceImpl service;

	@Before
	public void setUp() throws Exception {
		cmt = new Comment("ajsj", "bakjshj", "cxsh");
		optcmt = Optional.of(cmt);
	}

	@After
	public void tearDown() throws Exception {

	}
//	@Test
//	public void testSaveuser() throws DuplicateComment
//	{
//	  when(cr.findById(Mockito.anyString())).thenReturn(Optional.empty());
//	  when(cr.save(Mockito.any(Comment.class))).thenReturn(cmt);
//	  Comment c1=service.saveComment(cmt);
//	  assertEquals(cmt.getArtistSongName(),c1.getArtistSongName());
//	  verify(cr).findById(Mockito.anyString());
//	  verify(cr).save(Mockito.any());
//	}

	@Test
	public void testSave() throws DuplicateComment {
		service.saveComment(cmt);
	}

}
