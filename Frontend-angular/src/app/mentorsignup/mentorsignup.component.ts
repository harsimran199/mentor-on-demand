import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentorsignupService } from './mentorsignup.service';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']

})
export class MentorsignupComponent {

  mentor: Mentor = new Mentor();

  constructor(private router: Router, private mentorsignupService: MentorsignupService) {

  }

  createMentor(): void {
    this.mentorsignupService.createMentor(this.mentor)
        .subscribe( data => {
          alert("Mentor created successfully.");
        });

  };

}
