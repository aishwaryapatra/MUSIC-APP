package com.project.service;

import static org.junit.Assert.assertEquals;
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

import com.project.model.Recommendation;
import com.project.repository.RecommendationRepository;

@RunWith(MockitoJUnitRunner.class)
public class RecommendationTest {

	private List<Recommendation> list = null;

	Optional<Recommendation> optm;

	Recommendation r = null;
	@Mock
	private RecommendationRepository repo;

	@InjectMocks
	private RecommendationServiceImpl service;

	@Before
	public void setUp() throws Exception {
		r = new Recommendation("abc", 1, "hksa", "isha", "idhs", "asha");
		optm = Optional.of(r);
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testSave() throws Exception {
		when(repo.findById(Mockito.anyString())).thenReturn(Optional.empty());
		when(repo.save(Mockito.any(Recommendation.class))).thenReturn(r);
		Recommendation mf1 = service.saveRecom(r);
		assertEquals(r.getAlbumSingle(), mf1.getAlbumSingle());
		verify(repo).findById(Mockito.anyString());
		verify(repo).save(Mockito.any());
	}

}
