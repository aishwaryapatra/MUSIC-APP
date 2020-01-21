package com.project.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

public class CommentTest {
	private Comment c;

	@Test
	public void Beantest() {
		new BeanTester().testBean(Comment.class);
	}

	@Before
	public void setUp() throws Exception {
		c = new Comment();
		c.setArtistSongName("artistSongName");
		c.setComment("comment");
		c.setEmailUser("emailUser");

	}

}
