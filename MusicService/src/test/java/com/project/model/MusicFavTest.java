package com.project.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

public class MusicFavTest {
	private MusicFav mf;

	@Test
	public void Beantest() {
		new BeanTester().testBean(MusicFav.class);
	}

	@Before
	public void setUp() throws Exception {
		mf = new MusicFav();
		mf.setAlbumSingle("albumSingle");
		mf.setArtist_name("artist_name");
		mf.setArtistSongName("artistSongName");
		mf.setId("id");
		mf.setImage("image");
		mf.setTrackSingle("trackSingle");

	}

}
