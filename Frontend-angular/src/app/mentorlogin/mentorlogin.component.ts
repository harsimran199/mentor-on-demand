import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentorloginService } from './mentorlogin.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentorlogin.component.html',
  styles: ['./mentorlogin.component.css']
})
export class MentorloginComponent implements OnInit {

  mentors: Mentor[];
    mentor: Mentor = new Mentor();


  constructor(private router: Router, private mentorloginService: MentorloginService) {

  }

  ngOnInit() {
    this.mentorloginService.getMentors()
      .subscribe( data => {
        this.mentors = data;
      });
  };

  deleteMentor(mentor: Mentor): void {
    this.mentorloginService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };
  validate(email,password): void {

    this.mentorloginService.validate(email,password)
    .subscribe( data=> {
      if(data==null){
        alert('Username or password is incorrect!!');
      }
      else{
      alert("Mentor login Succesfull");
      let toStore = JSON.stringify(data);
      sessionStorage.setItem('storementordata',toStore);
      this.router.navigate(['mentordashboard']);
      }
    })
  
}

}


