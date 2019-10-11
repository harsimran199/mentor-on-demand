import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserprofileService } from './userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {


  users: User[];

  constructor( private router: Router, private userprofileService: UserprofileService) {

  }

  ngOnInit() {
    this.userprofileService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
      var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
      console.log(getuserdata);
         (<HTMLInputElement>document.getElementById('id')).value=getuserdata.id;
      (<HTMLInputElement>document.getElementById('firstName')).value=getuserdata.firstName;
    //  (<HTMLInputElement>document.getElementById('fname')).innerHTML=getuserdata.firstName+" "+getuserdata.lastName;
      (<HTMLInputElement>document.getElementById('userName')).value=getuserdata.userName;
    //  (<HTMLInputElement>document.getElementById('userName1')).innerHTML=getuserdata.userName;
      (<HTMLInputElement>document.getElementById('lastName')).value=getuserdata.lastName ;
      (<HTMLInputElement>document.getElementById('contactNumber')).value=getuserdata.contactNumber ;
      (<HTMLInputElement>document.getElementById('linkedinUrl')).value=getuserdata.linkedinUrl ;
      (<HTMLInputElement>document.getElementById('email')).value=getuserdata.email ;


  };

  deleteUser(user: User): void {
    this.userprofileService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };
  updateUser(user: User): void {

console.log('Here');
 
 console.log('In component user-',user);
    this.userprofileService.updateUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
 
  };

  userUpdate = {
    id: '',
    userName: '',
    email: '',
    contactNumber:'',
    firstName: '',
    lastName: '',
    linkedinUrl: '',
    city:'',
    country: '',
    password: '',
    textAr: ''
    
  };

 updateUserTest(user: User): void {
console.log('Data Recerved in TS *****************');

console.log((<HTMLInputElement>document.getElementById('id')).value);
this.userUpdate.id=(<HTMLInputElement>document.getElementById('id')).value;


console.log((<HTMLInputElement>document.getElementById('userName')).value);
this.userUpdate.userName=(<HTMLInputElement>document.getElementById('userName')).value;

console.log((<HTMLInputElement>document.getElementById('email')).value);
this.userUpdate.email=(<HTMLInputElement>document.getElementById('email')).value;

console.log((<HTMLInputElement>document.getElementById('contactNumber')).value);
this.userUpdate.contactNumber=(<HTMLInputElement>document.getElementById('contactNumber')).value;

console.log((<HTMLInputElement>document.getElementById('firstName')).value);
this.userUpdate.firstName=(<HTMLInputElement>document.getElementById('firstName')).value;

console.log((<HTMLInputElement>document.getElementById('lastName')).value);
this.userUpdate.lastName=(<HTMLInputElement>document.getElementById('lastName')).value;

console.log((<HTMLInputElement>document.getElementById('linkedinUrl')).value);
this.userUpdate.linkedinUrl=(<HTMLInputElement>document.getElementById('linkedinUrl')).value;

console.log((<HTMLInputElement>document.getElementById('city')).value);
this.userUpdate.city=(<HTMLInputElement>document.getElementById('city')).value;

console.log((<HTMLInputElement>document.getElementById('country')).value);
this.userUpdate.country=(<HTMLInputElement>document.getElementById('country')).value;

console.log((<HTMLInputElement>document.getElementById('password')).value);
this.userUpdate.password=(<HTMLInputElement>document.getElementById('password')).value;

console.log((<HTMLInputElement>document.getElementById('textAr')).value);
this.userUpdate.textAr=(<HTMLInputElement>document.getElementById('textAr')).value;

console.log('Sending at EndPoint-',this.userUpdate);
    this.userprofileService.updateUser(this.userUpdate)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
}
}


