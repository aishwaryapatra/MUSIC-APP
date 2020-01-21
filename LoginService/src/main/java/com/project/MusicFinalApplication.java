package com.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:dbconfig.properties")
public class MusicFinalApplication {
	public static void main(String[] args) {

		SpringApplication.run(MusicFinalApplication.class, args);

	}



}
