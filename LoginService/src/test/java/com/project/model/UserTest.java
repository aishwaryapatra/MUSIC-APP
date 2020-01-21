package com.project.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

public class UserTest {
	private User user;

	@Test
	public void Beantest() {
		new BeanTester().testBean(User.class);
	}

	@Before
	public void setUp() throws Exception {
		user = new User();
		user.setEmail("email");
		user.setFirstName("firstName");
		user.setLastName("lastName");
		user.setGender("gender");
		user.setPassword("password");
		user.setImage("image");

	}

}
