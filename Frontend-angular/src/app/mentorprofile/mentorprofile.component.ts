import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentorprofileService } from './mentorprofile.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentorprofile.component.html',
  styles: []
})
export class MentorprofileComponent implements OnInit {

  mentors: Mentor[];

  constructor(private router: Router, private mentorprofileService: MentorprofileService) {

  }

  ngOnInit() {
    this.mentorprofileService.getMentors()
      .subscribe( data => {
        this.mentors = data;
      });
      var getmentordata=JSON.parse(sessionStorage.getItem('storementordata'));
      console.log(getmentordata);
         (<HTMLInputElement>document.getElementById('id')).value=getmentordata.id;
      (<HTMLInputElement>document.getElementById('firstName')).value=getmentordata.firstName;
      // (<HTMLInputElement>document.getElementById('fname')).innerHTML=getmentordata.firstName+" "+getmentordata.lastName;
      (<HTMLInputElement>document.getElementById('userName')).value=getmentordata.userName;
      // (<HTMLInputElement>document.getElementById('userName1')).innerHTML=getmentordata.userName;
      (<HTMLInputElement>document.getElementById('lastName')).value=getmentordata.lastName ;
      (<HTMLInputElement>document.getElementById('contactNumber')).value=getmentordata.contactNumber ;
      (<HTMLInputElement>document.getElementById('linkedinUrl')).value=getmentordata.linkedinUrl ;
      (<HTMLInputElement>document.getElementById('email')).value=getmentordata.email ;
  };

  deleteMentor(mentor: Mentor): void {
    this.mentorprofileService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };
 createMentor(): void {
    this.mentorprofileService.createMentor(this.mentors)
        .subscribe( data => {
          alert("Mentor created successfully.");
        });

  };
updateMentor(mentor: Mentor): void {

console.log('Here');
 
 console.log('In component mentor-',mentor);
    this.mentorprofileService.updateMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
 
  };

  mentorUpdate = {
    id: '',
    userName: '',
    email: '',
    contactNumber:'',
    firstName: '',
    lastName: '',
    linkedinUrl: '',
    city:'',
    country: '',
    postalCode: '',
    textAr: ''
    
  };

 updateMentorTest(mentor: Mentor): void {
console.log('Data Recerved in TS *****************');

console.log((<HTMLInputElement>document.getElementById('id')).value);
this.mentorUpdate.id=(<HTMLInputElement>document.getElementById('id')).value;


console.log((<HTMLInputElement>document.getElementById('userName')).value);
this.mentorUpdate.userName=(<HTMLInputElement>document.getElementById('userName')).value;

console.log((<HTMLInputElement>document.getElementById('email')).value);
this.mentorUpdate.email=(<HTMLInputElement>document.getElementById('email')).value;

console.log((<HTMLInputElement>document.getElementById('contactNumber')).value);
this.mentorUpdate.contactNumber=(<HTMLInputElement>document.getElementById('contactNumber')).value;

console.log((<HTMLInputElement>document.getElementById('firstName')).value);
this.mentorUpdate.firstName=(<HTMLInputElement>document.getElementById('firstName')).value;

console.log((<HTMLInputElement>document.getElementById('lastName')).value);
this.mentorUpdate.lastName=(<HTMLInputElement>document.getElementById('lastName')).value;

console.log((<HTMLInputElement>document.getElementById('linkedinUrl')).value);
this.mentorUpdate.linkedinUrl=(<HTMLInputElement>document.getElementById('linkedinUrl')).value;

console.log((<HTMLInputElement>document.getElementById('city')).value);
this.mentorUpdate.city=(<HTMLInputElement>document.getElementById('city')).value;

console.log((<HTMLInputElement>document.getElementById('country')).value);
this.mentorUpdate.country=(<HTMLInputElement>document.getElementById('country')).value;

console.log((<HTMLInputElement>document.getElementById('postalCode')).value);
this.mentorUpdate.postalCode=(<HTMLInputElement>document.getElementById('postalCode')).value;

console.log((<HTMLInputElement>document.getElementById('textAr')).value);
this.mentorUpdate.textAr=(<HTMLInputElement>document.getElementById('textAr')).value;

console.log('Sending at EndPoint-',this.mentorUpdate);
    this.mentorprofileService.updateMentor(this.mentorUpdate)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
}
}


