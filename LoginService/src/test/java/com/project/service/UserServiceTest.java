package com.project.service;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.project.exception.UserExistsException;
import com.project.model.User;
import com.project.repository.UserRepository;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {
	Optional<User> optuser;

	@Mock
	private UserRepository ur;
	@InjectMocks
	private UserServiceImpl us;
	User user;

	@Before
	public void setUp() throws Exception {
		user = new User("ajsj", "bakjshj", "cxsh", "dxsn", "exs", "fxs");
		optuser = Optional.of(user);
	}

	@After
	public void tearDown() throws Exception {

	}

	@Test(expected = UserExistsException.class)
	public void testSaveuser() throws UserExistsException {
		when(ur.findById(Mockito.anyString())).thenReturn(optuser);
		us.saveuser(user);
		verify(ur).findById(Mockito.anyString());
	}

}
