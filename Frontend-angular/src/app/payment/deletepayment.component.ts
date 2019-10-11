import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Payment} from '../models/payment.model';
import { DeletepaymentService } from './deletepayment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './deletepayment.component.html',
  styleUrls: ['./deletepayment.component.css']
})
export class DeletepaymentComponent implements OnInit {
  payment: Payment[];

  constructor(private router: Router, private paymentService: DeletepaymentService) {

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

  deletePayment(payment: Payment): void {
    this.paymentService.deletePayment(payment)
      .subscribe( data => {
        this.payment = this.payment.filter(u => u !== payment);
      })
  };


}
