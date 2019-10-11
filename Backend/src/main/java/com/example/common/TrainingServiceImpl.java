package com.example.common;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrainingServiceImpl implements TrainingService {
	
	@Autowired
	private TrainingRepository repository;

	@Override
	public Training create(Training training) {
		
		return repository.save(training);
	}

	@Override
	public Training delete(int id) {
		Training training = findById(id);
		if(training != null) {
			repository.delete(training);
		}
		
		return training;
	}

	@Override
	public List<Training> findAll() {
		
		return repository.findAll();
	}

	@Override
	public Training findById(int id) {
		
		return repository.findOne(id);
	}

	@Override
	public Training update(Training training) {
		
		return repository.save(training);
	}

	@Override
	public List<Training> findTrainingByMentorId(int mentorId) {
		// TODO Auto-generated method stub
		return repository.findTrainingByMentorId(mentorId);
	}

	@Override
	public List<Training> findTrainingByUsersId(int userId) {
		// TODO Auto-generated method stub
		return repository.findTrainingByUsersId(userId);
	}

	@Override
	public Training findByIdAndMentorId(int Id, int mentorId) {
		// TODO Auto-generated method stub
		return repository.findByIdAndMentorId(Id, mentorId);
	}

	@Override
	public Training findByIdAndUsersId(int Id, int userId) {
		// TODO Auto-generated method stub
		return repository.findByIdAndUsersId(Id, userId);
	}

	@Override
	public List<Training> findByStartDateBetween(Date d1, Date d2) {
		// TODO Auto-generated method stub
		return repository.findByStartDateBetween(d1, d2);
	}

	@Override
	public List<Training> findTrainingByMentorIdAndStatusEquals(int mentorId, String status) {
		// TODO Auto-generated method stub
		return repository.findTrainingByMentorIdAndStatusEquals(mentorId,status);
	}

	@Override
	public List<Training> findTrainingByUsersIdAndStatusEquals(int userId, String status) {
		// TODO Auto-generated method stub
		return repository.findTrainingByUsersIdAndStatusEquals(userId,status);
	}

	
	
	

}
