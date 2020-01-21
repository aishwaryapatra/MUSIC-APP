package com.project.controller;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.model.Comment;
import com.project.model.MusicFav;
import com.project.model.Recommendation;
import com.project.model.UserFavMap;
import com.project.service.CommentService;
import com.project.service.MusicFavService;
import com.project.service.RecommendationService;
import com.project.service.UserFavMapService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = MusicFavController.class)
public class MusicFavControllerTest {

	private Comment c;

	@MockBean
	private CommentService cs;

	private MusicFav m;

	@Autowired
	private MockMvc mockMvc;

	private Recommendation r;

	@MockBean
	private RecommendationService rs;
	@MockBean
	private MusicFavService service;
	private String token;
	private UserFavMap ufm;
	@MockBean
	private UserFavMapService ufms;
	// private User user;

	@Before
	public void setUp() throws Exception {
		// user = new User("Ankita", "Shreya", "ankta@gmail.com", "123", "female", "");
		token = Jwts.builder().setId("ankita9shreya@gmail.com").setSubject("Ankita").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		m = new MusicFav("abc", "cdfeg", "abchsaj", "abcdef", "female", "image");
		c = new Comment("abc", "cdfeg", "abchsaj");
		List<String> list = new ArrayList();
		ufm = new UserFavMap("abc", list);
		r = new Recommendation("as", 1, "sfrd", "dy", "dtdr", "dft");
	}

	@After
	public void tearDown() throws Exception {

	}

	// Comment
	@Test
	public void testAddComment() throws Exception {
		when(cs.saveComment(Mockito.any())).thenReturn(c);
		String mJson = new ObjectMapper().writeValueAsString(c);
		mockMvc.perform(post("/auth/verfication/favMusic/saveCmt").contentType(MediaType.APPLICATION_JSON)
				.content(mJson).header("Authorization", "Bearer " + token)).andExpect(status().isCreated());
		// verify mock has been called
		verify(cs).saveComment(Mockito.any(Comment.class));
		verifyNoMoreInteractions(cs);

	}

	@Test
	public void testAddFav() throws Exception {
		when(service.saveFav(Mockito.any(MusicFav.class))).thenReturn(m);
		String mJson = new ObjectMapper().writeValueAsString(m);
		mockMvc.perform(post("/auth/verfication/favMusic/saveFav").contentType(MediaType.APPLICATION_JSON)
				.content(mJson).header("Authorization", "Bearer " + token)).andExpect(status().isCreated());
		// verify mock has been called
		verify(service).saveFav(Mockito.any(MusicFav.class));
		verifyNoMoreInteractions(service);
	}

	@Test
	public void testAddMapList() throws Exception {
		when(ufms.saveList(Mockito.any())).thenReturn(ufm);
		String mJson = new ObjectMapper().writeValueAsString(ufm);
		mockMvc.perform(post("/auth/verfication/favMusic/saveMap").contentType(MediaType.APPLICATION_JSON)
				.content(mJson).header("Authorization", "Bearer " + token)).andExpect(status().isCreated());
		// verify mock has been called
		verify(ufms).saveList(Mockito.any(UserFavMap.class));
		verifyNoMoreInteractions(ufms);

	}

	@Test
	public void testAddRecommend() throws Exception {
		when(rs.saveRecom(Mockito.any())).thenReturn(r);
		String mJson = new ObjectMapper().writeValueAsString(r);
		mockMvc.perform(post("/auth/verfication/favMusic/addRecom").contentType(MediaType.APPLICATION_JSON)
				.content(mJson).header("Authorization", "Bearer " + token)).andExpect(status().isCreated());
		// verify mock has been called
		verify(rs).saveRecom(Mockito.any(Recommendation.class));
		verifyNoMoreInteractions(rs);

	}

}
