package com.example.common;

import java.util.Date;
import java.util.List;

public interface TrainingService {
	
	Training create(Training training);
	
	Training delete(int id);
	
	List<Training> findAll();
	
	Training findById(int id);
	
	Training update(Training training);
	
	List<Training> findTrainingByMentorId(int mentorId);
	
	List<Training> findTrainingByUsersId(int userId);
	
	Training findByIdAndMentorId(int trainingid, int mentorId);
	
	Training findByIdAndUsersId(int trainingId, int userId);
	List<Training> findByStartDateBetween(Date d1, Date d2);

	List<Training> findTrainingByMentorIdAndStatusEquals(int mentorId, String status);

	List<Training> findTrainingByUsersIdAndStatusEquals(int userId, String status);
    
    
}
