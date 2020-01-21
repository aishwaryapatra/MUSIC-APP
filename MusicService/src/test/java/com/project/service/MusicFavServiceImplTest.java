package com.project.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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

import com.project.exception.MusicAlreadyExistsException;
import com.project.model.MusicFav;
import com.project.repository.MusicFavRepository;

@RunWith(MockitoJUnitRunner.class)
public class MusicFavServiceImplTest {

	@Mock
	private MusicFavRepository mf;

	private List<MusicFav> mflist = null;

	MusicFav music = null;
	Optional<MusicFav> optm;

	@InjectMocks
	private MusicFavServiceImpl service;

	@Before
	public void setUp() throws Exception {
		music = new MusicFav("abc", "efd", "hksa", "isha", "idhs", "asha");
		optm = Optional.of(music);
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testAddFav() throws Exception {
		when(mf.findById(Mockito.anyString())).thenReturn(Optional.empty());
		when(mf.save(Mockito.any(MusicFav.class))).thenReturn(music);
		MusicFav mf1 = service.saveFav(music);
		assertEquals(music.getArtistSongName(), mf1.getArtistSongName());
		verify(mf).findById(Mockito.anyString());
		verify(mf).save(Mockito.any());
	}

	@Test(expected = Exception.class)
	public void testGetFavFailure() throws Exception {
		when(mf.findById(music.getId())).thenThrow(Exception.class);
		@SuppressWarnings("unused")
		MusicFav mq = service.getFavMusicById(music.getId());

	}
//	
//	@Test
//	public void testGetAll() throws Exception {
//		mflist.add(music);
//		music=new MusicFav("asv","agffd","sg","dh","dg","dfd");
//		mflist.add(music);
//		music=new MusicFav("asv1","agffd","sg","dh","dg","dfd");
//		mflist.add(music);
//		when(mf.findAll()).thenReturn(mflist);
//		List<MusicFav> listnew=service.findALL();
//		assertEquals(mflist,listnew);
//		
//		
//	}

	@Test
	public void testGetFavSuccess() throws MusicAlreadyExistsException {
		when(mf.findById(music.getId())).thenReturn(optm);
		MusicFav mq = service.getFavMusicById(music.getId());
		assertEquals(music, mq);
		verify(mf, times(1)).findById(music.getId());
	}

}
