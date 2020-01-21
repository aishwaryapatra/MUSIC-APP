package com.project.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

public class UserFavTest {
	private UserFavMap uf;

	@Test
	public void Beantest() {
		new BeanTester().testBean(UserFavMap.class);
	}

	@Before
	public void setUp() throws Exception {
		uf = new UserFavMap();
		uf.setEmailUser("emailUser");
		uf.setUserPref(null);

	}

}
