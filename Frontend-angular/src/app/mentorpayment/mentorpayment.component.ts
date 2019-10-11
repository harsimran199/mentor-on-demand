import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentorpayment} from '../models/mentorpayment.model';
import { MentorpaymentService } from './mentorpayment.service';

@Component({
  selector: 'app-mentorpayment',
  templateUrl: './mentorpayment.component.html',
  styleUrls: ['./mentorpayment.component.css']
})
export class MentorpaymentComponent implements OnInit {
  payment: Mentorpayment[];

  constructor(private router: Router, private paymentService: MentorpaymentService) {

  }

  ngOnInit() {
    this.paymentService.getPayment()
      .subscribe( data => {
        this.payment = data;
      });
      var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
      console.log(getuserdata);
      (<HTMLInputElement>document.getElementById('id')).value=getuserdata.id;
      (<HTMLInputElement>document.getElementById('txnType')).value=getuserdata.txnType;
      (<HTMLInputElement>document.getElementById('amount')).value=getuserdata.amount;
      (<HTMLInputElement>document.getElementById('remarks')).value=getuserdata.remarks;
      (<HTMLInputElement>document.getElementById('paymentType')).value=getuserdata.paymentType ;
 
  };

  


}
