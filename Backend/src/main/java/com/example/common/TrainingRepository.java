package com.example.common;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface TrainingRepository extends Repository<Training, Integer>{
		
		void delete(Training training);
		
		List<Training> findAll();
		
		Training findOne(int id);
		
		Training save(Training training);
		
		@Query("select training from Training training where training.mentor.id=?")
		List<Training> findTrainingByMentorId(int mentorId);

		@Query("select training from Training training where training.id=? and training.mentor.id=?")
		Training findByIdAndMentorId(int trainingId, int mentorId);
		
		List<Training> findTrainingByUsersId(int userId);
		Training findByIdAndUsersId(int trainingId, int userId);
//		@Query("select training from Training training where training.startDate between ?1 and ?2")
//		Training findByStartDateBetween(Date startDateBefore, Date StartDateAfter);
		List<Training> findByStartDateBetween(Date d1, Date d2);

		List<Training> findTrainingByMentorIdAndStatusEquals(int mentorId, String status);

		List<Training> findTrainingByUsersIdAndStatusEquals(int userId, String status);
		
		

	}

