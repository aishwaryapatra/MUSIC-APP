package com.project.service;

import com.project.exception.UserExistsException;
import com.project.model.User;

public interface UserService {
	public User getDetails(String email);

	public User login(String email, String password);

	public void saveuser(User u) throws UserExistsException;

}
