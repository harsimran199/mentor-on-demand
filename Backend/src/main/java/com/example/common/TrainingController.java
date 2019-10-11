package com.example.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping({"/training"})
public class TrainingController {
	
	@Autowired
	private TrainingService trainingService;
	
	@PostMapping
	public Training create(@RequestBody Training training) {
		return trainingService.create(training);
	}
	
	@GetMapping(path = {"/{id}"})
	public Training findOne(@PathVariable("id") int id) {
		return trainingService.findById(id);
	}
	
	@PutMapping(path = {"/{id}"})
	public Training update(@PathVariable("id") int id, @RequestBody Training training) {
	    training.setId(id);
        return trainingService.update(training);
    }

    @DeleteMapping(path ={"/{id}"})
    public Training delete(@PathVariable("id") int id) {
        return trainingService.delete(id);
    }

    @GetMapping
    public List<Training> findAll(){
        return trainingService.findAll();
    }
    
    @GetMapping("/findTrainingByMentorId/{mentorId}")
    public List<Training> getTrainingByMentorId(@PathVariable(value = "mentorId") int mentorId) {
        return trainingService.findTrainingByMentorId(mentorId);
    }
    
    @GetMapping("/findTrainingByUserId/{userId}")
    public List<Training> getTrainingByUserId(@PathVariable(value = "userId") int userId) {
        return trainingService.findTrainingByUsersId(userId);
    }
    
    @GetMapping("/findByIdAndMentorId/{id}/{mentorId}")
    public Training getfindByIdAndMentorId(@PathVariable(value = "id") int Id, @PathVariable(value = "mentorId") int mentorId) {
    	System.out.println(trainingService.findByIdAndMentorId(Id, mentorId));
    	return trainingService.findByIdAndMentorId(Id, mentorId);
    }
    
    @GetMapping("/findByIdAndUserId/{id}/{userId}")
    public Training getfindByIdAndUserId(@PathVariable(value = "id") int Id, @PathVariable(value = "userId") int userId) {
    	return trainingService.findByIdAndUsersId(Id, userId);
    }
    
    @GetMapping("/findByStartDateBetween/{dateStart}/{dateEnd}")
    public List<Training> findByStartDateBetween(@PathVariable(value="dateStart") String dateStart, @PathVariable(value="dateEnd") String dateEnd) {
    	SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
    	Date dateStartDate1;
		try {
			dateStartDate1 = simpleDateFormat.parse(dateStart);
		} catch (ParseException e) {
			dateStartDate1=new Date();
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	Date dateStartDate2;
		try {
			dateStartDate2 = simpleDateFormat.parse(dateEnd);
		} catch (ParseException e) {
			dateStartDate2=new Date();
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	return trainingService.findByStartDateBetween(dateStartDate1, dateStartDate2);
    }
    @GetMapping("/findTrainingByMentorIdAndStatusEquals/{mentorId}/{status}")
	public List<Training> getTrainingByMentorIdAndStatusEquals(@PathVariable(value = "mentorId") int mentorId, @PathVariable(value = "status") String status) {
		return trainingService.findTrainingByMentorIdAndStatusEquals(mentorId, status);
	}
      
    @GetMapping("/findTrainingByUsersIdAndStatusEquals/{userId}/{status}")
    public List<Training> getTrainingByUsersIdAndStatusEquals(@PathVariable(value = "userId") int userId,@PathVariable(value = "status") String status) {
        return trainingService.findTrainingByUsersIdAndStatusEquals(userId, status);
    }
    
}
