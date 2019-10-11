import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserdashboardService } from './userdashboard.service';
import { Training } from '../models/training.model';
import { Skill } from '../models/skill.model';
import { Technology } from '../models/technology.model';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  users: User[];
technology:Technology[];
 training:Training=new Training();
    trainings: Training[];

  constructor(private router: Router, private userdashboardService: UserdashboardService) {

  }

  ngOnInit() {
   this.userdashboardService.getTraining()
      .subscribe( data => {
        this.trainings = data;
      });

  };
  

  deleteUser(user: User): void {
    this.userdashboardService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


