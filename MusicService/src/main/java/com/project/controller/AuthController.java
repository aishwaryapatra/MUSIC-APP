package com.project.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/auth/verfication")
public class AuthController {
	@GetMapping("/")
	public ResponseEntity<?> validationUser() {
		return new ResponseEntity<String>("Protected Resource:", HttpStatus.OK);
	}

}
