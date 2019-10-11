import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from '../models/mentor.model';
import { Training } from '../models/training.model';
import { StorageService } from './storage.service';
import { SearchtrainingService } from './searchtraining.service';
import { SearchresultsComponent } from '../searchresults/searchresults.component';
@Component({
  selector: 'app-searchtraining',
  templateUrl: './searchtraining.component.html',
  styles: ['./searchtraining.component.css'],
  providers: [SearchtrainingService, SearchresultsComponent]
})
export class  SearchtrainingComponent implements OnInit {
  mentor: Mentor = new Mentor();
  mentors: Mentor[];
  ment: Mentor[];
  trainings: Training[];
  training: Training = new Training();
  constructor(private router: Router, private searchtrainingService:  SearchtrainingService, private storageService: StorageService,private comp: SearchresultsComponent) {

  }

  ngOnInit() {
    this.searchtrainingService.getMentors().subscribe(data => {
      this.mentors = data;
      console.log(this.mentors);
      
    })

    this.searchtrainingService.getTrainings().subscribe(data => {
      this.trainings = data;
      console.log(this.trainings);
      
    })

  };

  
  check(startingDate, endingDate, techName): void {
    var x=0;
    let name;
    let rout = this.router;
    let men = this.mentors;
    let train = this.trainings;
    var ment = new Array();
    var tech=new Array();
    for (let i =0; i< men.length;i++)
    {
      if(startingDate == train[i].startDate || endingDate == train[i].endDate || techName == train[i].technology.techName )
      {
        ment[x] = men[i];
        tech[x]=train[i];
        x++;
        this.storageService.setScope(ment);
        this.storageService.setTScope(tech);
        this.comp.ngOnInit();
        rout.navigate(['searchresults']);
      }
    }
    
  }

}


