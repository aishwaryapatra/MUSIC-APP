package com.project.controller;

import java.util.List;

import javax.servlet.ServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.exception.MusicAlreadyExistsException;
import com.project.exception.MusicFavListEmpty;
import com.project.exception.RecommendationListEmpty;
import com.project.exception.SongNameDoesnotExists;
import com.project.model.Comment;
import com.project.model.MusicFav;
import com.project.model.Recommendation;
import com.project.model.UserFavMap;
import com.project.service.CommentService;
import com.project.service.MusicFavService;
import com.project.service.RecommendationService;
import com.project.service.UserFavMapService;

import io.jsonwebtoken.Claims;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth/verfication/favMusic")
public class MusicFavController {

	@Autowired
	private CommentService commentService;

	@Autowired
	private MusicFavService ms;

	@Autowired
	private RecommendationService rsd;

	@Autowired
	private UserFavMapService ufms;

	@GetMapping("/getCmt/{artistSongName}")
	public ResponseEntity<?> getcmt(@PathVariable("artistSongName") String artistSongName) {
		ResponseEntity<?> rs = null;

		try {

			List<Comment> cmt = commentService.findBySongName(artistSongName);
			rs = ResponseEntity.status(HttpStatus.OK).body(cmt);

		} catch (Exception e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}

	@GetMapping("/getFav/{id}")
	public ResponseEntity<?> getFavMusic(@PathVariable("id") String id) {
		System.out.println("Inside getFAV{id}");
		System.out.println(id);
		ResponseEntity<?> rs = null;
		try {
			MusicFav b = ms.getFavMusicById(id);
			rs = ResponseEntity.status(HttpStatus.OK).body(b);
		} catch (MusicAlreadyExistsException e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		System.out.println(rs);
		return rs;
	}

	@GetMapping("/getFavMap")
	public ResponseEntity<?> getMap(ServletRequest req) {
//		System.out.println(req.getAttribute("claims").get);
		Claims c = (Claims) req.getAttribute("claims");
		System.out.println(c.getId());
		System.out.println("XXXX");
		System.out.println("ANkita");
		ResponseEntity<?> rs = null;
		try {
			UserFavMap b = ufms.getFavMapByEmailUser(c.getId());
			rs = ResponseEntity.status(HttpStatus.OK).body(b);
		} catch (MusicAlreadyExistsException e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}

	@GetMapping("/getAllRecom")
	public ResponseEntity<?> recommendAll() {
		ResponseEntity<?> rs = null;
		try {
			List<Recommendation> blist = rsd.findALL();
			rs = ResponseEntity.status(HttpStatus.OK).body(blist);
		} catch (RecommendationListEmpty e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();

		}
		return rs;
	}

	@PostMapping("/saveCmt")
	public ResponseEntity<?> savecmt(@RequestBody Comment c) {
		ResponseEntity<?> rs = null;

		try {

			Comment comment = commentService.saveComment(c);
			System.out.println(c.toString());
			if (comment != null) {
				rs = ResponseEntity.status(HttpStatus.CREATED).build();
			} else {
				rs = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (Exception e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;

	}

	@PostMapping("/saveFav")
	public ResponseEntity<?> saveFavList(@RequestBody MusicFav mf) {
		ResponseEntity<?> rs = null;
		try {
			MusicFav bk = ms.saveFav(mf);
			if (bk != null)
				rs = ResponseEntity.status(HttpStatus.CREATED).build();
			else
				rs = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

		} catch (MusicAlreadyExistsException e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;

	}

	@PostMapping("/saveMap")
	public ResponseEntity<?> saveMapList(@RequestBody UserFavMap mf) {
		ResponseEntity<?> rs = null;
		try {
			System.out.println(mf.getUserPref());
			UserFavMap bk = ufms.saveList(mf);
			if (bk != null)
				rs = ResponseEntity.status(HttpStatus.CREATED).build();
			else
				rs = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

		} catch (MusicAlreadyExistsException e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;

	}

	@PostMapping("/addRecom")
	public ResponseEntity<?> saveRecommendationcount(@RequestBody Recommendation mf) throws SongNameDoesnotExists {
		ResponseEntity<?> rs = null;
		try {
			Recommendation bk = rsd.saveRecom(mf);
			if (bk != null)
				rs = ResponseEntity.status(HttpStatus.CREATED).build();
			else
				rs = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

		} catch (SongNameDoesnotExists e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;

	}

	@GetMapping("/getallFav")
	public ResponseEntity<?> viewAll() {
		ResponseEntity<?> rs = null;
		try {
			List<MusicFav> blist = ms.findALL();
			rs = ResponseEntity.status(HttpStatus.OK).body(blist);
		} catch (MusicFavListEmpty e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();

		}
		return rs;
	}

}
