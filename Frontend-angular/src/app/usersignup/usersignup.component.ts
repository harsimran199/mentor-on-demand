import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UsersignupService } from './usersignup.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']

})
export class UsersignupComponent {

  user: User = new User();

  constructor(private router: Router, private usersignupService: UsersignupService) {

  }

  createUser(): void {
    this.usersignupService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
