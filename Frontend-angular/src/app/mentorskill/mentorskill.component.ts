import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentorskill } from '../models/mentorskill.model';
import { MentorskillService } from './mentorskill.service';

@Component({
  selector: 'app-mentorskill',
  templateUrl: './mentorskill.component.html',
  styles: ['./mentorskill.component.css']
})
export class MentorskillComponent implements OnInit {

  skill: Mentorskill[];

  constructor(private router: Router, private skillService: MentorskillService) {

  }

  ngOnInit() {
    this.skillService.getSkill()
      .subscribe( data => {
        this.skill = data;
      });
  };

 

}


