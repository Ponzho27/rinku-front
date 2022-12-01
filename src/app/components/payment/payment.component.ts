import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/interfaces/payment.interfase';
import { EmployeedService } from 'src/app/services/employeed.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: Payment; 

  constructor(
    private employeedService: EmployeedService
  ) {
    this.payment = this.employeedService.getPaymentCalculate();
  }

  ngOnInit(): void {
  }

}
