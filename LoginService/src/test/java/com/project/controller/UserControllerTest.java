package com.project.controller;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

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
import com.project.model.User;
import com.project.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserController.class)
public class UserControllerTest {
	private String email;
	@Autowired
	private MockMvc mockMvc;
	private String password;
	@MockBean
	private UserService service;
	private String token;
	private User user;

	@Before
	public void setUp() throws Exception {
		user = new User("abc", "cdfeg", "abc@gmail.com", "abcdef", "female", "image");
		token = Jwts.builder().setId(user.getEmail()).setSubject(user.getFirstName()).setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		email = user.getEmail();
		password = user.getPassword();
	}

	@After
	public void tearDown() throws Exception {

	}

	@Test
	public void testGetDetails() throws Exception {
		when(service.getDetails(Mockito.anyString())).thenReturn(user);
		mockMvc.perform(get("/users/getimage/a@")).andExpect(status().isOk()).andDo(print());
		verify(service).getDetails(Mockito.anyString());
	}

	@Test
	public void testLogin() throws Exception {
		when(service.login(user.getEmail(), user.getPassword())).thenReturn(user);
		String mJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/users/login").contentType(MediaType.APPLICATION_JSON).content(mJson)
				.header("Authorization", "Bearer " + token)).andExpect(status().isOk());
		// verify mock has been called
		// verify(service).login();
		// verifyNoMoreInteractions(service);
	}

	@Test
	public void testSaveuser() throws Exception {
		// when(service.saveuser(Mockito.any(User.class))).thenReturn(user);
		String userJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/users/save").contentType(MediaType.APPLICATION_JSON).content(userJson))
				.andExpect(status().isOk());
		// verify mock has been called
		verify(service).saveuser(Mockito.any(User.class));
		verifyNoMoreInteractions(service);
	}

}
