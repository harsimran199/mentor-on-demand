import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdmindashboardService } from './admindashboard.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  users:User[];
  user: User = new User();

  constructor(private router: Router, private admindashboardService: AdmindashboardService) {

  }

  ngOnInit() {
    this.admindashboardService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
       var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
      console.log(getuserdata);
      (<HTMLInputElement>document.getElementById('firstName')).value=getuserdata.firstName;
      (<HTMLInputElement>document.getElementById('userName')).value=getuserdata.userName;
      (<HTMLInputElement>document.getElementById('lastName')).value=getuserdata.lastName ;
      (<HTMLInputElement>document.getElementById('contactNumber')).value=getuserdata.contactNumber ;
      (<HTMLInputElement>document.getElementById('linkedinUrl')).value=getuserdata.linkedinUrl ;
      (<HTMLInputElement>document.getElementById('email')).value=getuserdata.email ;

  };

  deleteUser(user: User): void {
    this.admindashboardService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };
  validate(email,password): void {
    this.admindashboardService.validate(email,password)
    .subscribe( data=> {
      if(data==null){
        alert('Username or password is incorrect!!');
      }
      else{
        this.router.navigate(['userportal']);
      }
    })
  
}
}


