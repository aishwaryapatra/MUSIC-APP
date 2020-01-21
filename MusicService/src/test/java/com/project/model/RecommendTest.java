package com.project.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

public class RecommendTest {
	private Recommendation rt;

	@Test
	public void Beantest() {
		new BeanTester().testBean(Recommendation.class);
	}

	@Before
	public void setUp() throws Exception {
		rt = new Recommendation();
		rt.setAlbumSingle("albumSingle");
		rt.setArtist_name("artist_name");
		rt.setArtistSongName("artistSongName");
		rt.setImage("image");
		rt.setRecommendationCount(1);
		rt.setTrackSingle("trackSingle");

	}

}
