import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentortechnology } from '../models/mentortechnology.model';
import { MentortechnologyService } from './mentortechnology.service';

@Component({
  selector: 'app-mentortechnology',
  templateUrl: './mentortechnology.component.html',
  styles: []
})
export class MentortechnologyComponent implements OnInit {

  technologys: Mentortechnology[];

  constructor(private router: Router, private technologyService: MentortechnologyService) {

  }

  ngOnInit() {
    this.technologyService.getTechnologys()
      .subscribe( data => {
        this.technologys = data;
      });
  };

  

}


