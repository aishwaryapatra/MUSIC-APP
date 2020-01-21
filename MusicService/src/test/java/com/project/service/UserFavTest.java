package com.project.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.project.model.UserFavMap;
import com.project.repository.UserFavMapRepository;

@RunWith(MockitoJUnitRunner.class)
public class UserFavTest {
	UserFavMap music = null;

	Optional<UserFavMap> optm;

	@Mock
	private UserFavMapRepository repo;
	@InjectMocks
	private UserFavMapServiceImpl service;

	@Before
	public void setUp() throws Exception {
		List<String> list = new ArrayList();
		music = new UserFavMap("abc", list);
		optm = Optional.of(music);
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testAddFav() throws Exception {
		when(repo.findById(Mockito.anyString())).thenReturn(Optional.empty());
		when(repo.save(Mockito.any(UserFavMap.class))).thenReturn(music);
		UserFavMap music1 = service.saveList(music);
		assertEquals(music.getEmailUser(), music1.getEmailUser());
		verify(repo).findById(Mockito.anyString());
		verify(repo).save(Mockito.any());
	}

}
