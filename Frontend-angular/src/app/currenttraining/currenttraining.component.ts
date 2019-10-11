import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { CurrenttrainingService } from './currenttraining.service';

@Component({
  selector: 'app-currenttraining',
  templateUrl: './currenttraining.component.html',
  styleUrls: ['./currenttraining.component.css']
})
export class  CurrenttrainingComponent implements OnInit {
  training: Training[];
  id: string;
  
  mid: string;
  constructor(private router: Router, private currenttrainingService: CurrenttrainingService) {

  }

  ngOnInit() {
    this.id=sessionStorage.getItem("id");
    this.mid=sessionStorage.getItem("mid");
    if(this.id!=null){
    this.currenttrainingService.getTraining()
      .subscribe( data => {
        this.training = data;
      });}
      else if(this.mid!=null){
        this.currenttrainingService.getTraining2()
          .subscribe( data => {
            this.training = data;
          });}
      else{
        this.currenttrainingService.getTraining1()
          .subscribe( data => {
            this.training = data;
          });
        }

  };
  deleteTraining(training: Training): void {
    this.currenttrainingService.deleteTraining(training)
      .subscribe( data => {
        this.training = this.training.filter(u => u !== training);
      })
  };
  search(startDate,endDate):void{
    sessionStorage.setItem('startDate',startDate);
    sessionStorage.setItem('endDate',endDate);
    this.router.navigate(['currenttraining']);
  }


}
