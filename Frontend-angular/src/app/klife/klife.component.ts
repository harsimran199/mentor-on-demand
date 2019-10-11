import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { KlifeService } from './klife.service';

@Component({
  selector: 'app-klife',
  templateUrl: './klife.component.html',
  styleUrls: ['./klife.component.css']
})
export class KlifeComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private klifeService: KlifeService) {

  }

  ngOnInit() {
    this.klifeService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.klifeService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


