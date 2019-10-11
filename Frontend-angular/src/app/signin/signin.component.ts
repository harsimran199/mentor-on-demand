import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  users:User[];
  user: User = new User();

  constructor(private router: Router, private signinService: SigninService) {

  }

  ngOnInit() {
    this.signinService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.signinService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };
  validate(email,password): void {
  console.log('comp');
    this.signinService.validate(email,password)
    .subscribe( data=> {
      if(data==null){
        alert('Username or password is incorrect!!');
      }
      else{
        sessionStorage.setItem('storeuserdata',JSON.stringify(data));
        this.router.navigate(['userdashboard']);
        localStorage.setItem('storeuserdata',JSON.stringify(data));
      }
    })
  
}
}


