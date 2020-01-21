package com.project;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.project.jwtfilter.AuthFilter;

@SpringBootApplication
public class MusicFinalApplication {
	public static void main(String[] args) {
//		logger.info("Logginf message");
		SpringApplication.run(MusicFinalApplication.class, args);

	}

	@Bean
	FilterRegistrationBean jwtFilter() {
		FilterRegistrationBean<Filter> bean = new FilterRegistrationBean<Filter>();
		bean.setFilter(new AuthFilter());
		bean.addUrlPatterns("/auth/verfication/*");
		return bean;
	}
//	private static final Logger logger = LoggerFactory.getLogger(MusicFinalApplication.class);

}
