import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentordashboardService } from './mentordashboard.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentordashboard.component.html',
  styles: ['./mentordashboard.component.css']
})
export class MentordashboardComponent implements OnInit {

  mentors: Mentor[];

  constructor(private router: Router, private mentordashboardService: MentordashboardService) {

  }

  ngOnInit() {
    this.mentordashboardService.getMentors()
      .subscribe( data => {
        this.mentors = data;
      });
  };

  deleteMentor(mentor: Mentor): void {
    this.mentordashboardService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };

}


