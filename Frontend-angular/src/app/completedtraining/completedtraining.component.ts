import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { CompletedtrainingService } from './completedtraining.service';

@Component({
  selector: 'app-training',
  templateUrl: './completedtraining.component.html',
  styleUrls: ['./completedtraining.component.css']
})
export class CompletedtrainingComponent implements OnInit {
  training: Training[];
  id=sessionStorage.getItem("id");
  startDate=sessionStorage.getItem("startDate");
  endDate=sessionStorage.getItem("endDate");

  constructor(private router: Router, private completedtrainingService: CompletedtrainingService) {

  }

  ngOnInit() {
    this.completedtrainingService.getTraining1()
      .subscribe( data => {
        this.training = data;
      });
      
      // else{
      //   this.completedtrainingService.getTraining()
      //     .subscribe( data => {
      //       this.training = data;
      //     });
      //   }

  }
  deleteTraining(training: Training): void {
    this.completedtrainingService.deleteTraining(training)
      .subscribe( data => {
        this.training = this.training.filter(u => u !== training);
      })
  };


}
