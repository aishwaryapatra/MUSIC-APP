package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	public User findByEmail(String email);

	public List<User> findByEmailAndPassword(String email, String password);

}
