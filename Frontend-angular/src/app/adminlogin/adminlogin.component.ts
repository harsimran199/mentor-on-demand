import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminloginService } from './adminlogin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './adminlogin.component.html',
  styles: ['./adminlogin.component.css']
})
export class AdminloginComponent{

  
 
    username:string;
    password:string;

  constructor(private router: Router, private adminloginService: AdminloginService) {

  }

  

  
  AdminLogin()
  {
      if(this.username=="Admin" && this.password=="admin123")
      {
        this.router.navigate(['/admindashboard'])
      }
      else
      {
        alert("Username or password is incorrect");
      }
  }
 

}


