package com.example.common;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<User, Integer>{
	
	void delete(User user);

	List<User> findAll();
	
	User findOne(int id);
	
	User save(User user);
	
		
	@Query("select user from User user where user.email=? and user.password=?")
	User findUser(String email, String password);

	@Query("select user.id from User user where user.userName=?")
	String check(String userName);

}
