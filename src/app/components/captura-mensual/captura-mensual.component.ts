import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/interfaces/config.interfase';
import { Employeed } from 'src/app/interfaces/employeed.interfase';
import { Payment } from 'src/app/interfaces/payment.interfase';
import { ConfigService } from 'src/app/services/config.service';
import { EmployeedService } from 'src/app/services/employeed.service';
declare var $: any;

@Component({
  selector: 'app-captura-mensual',
  templateUrl: './captura-mensual.component.html',
  styleUrls: ['./captura-mensual.component.css']
})
export class CapturaMensualComponent implements OnInit {

  employeed: Employeed = {
    ID: 0,
    R_NAME: "",
    R_ADDITIONAL: "",
    ROLE_ID: 0,
    E_NAME: "",
    E_NUMBER_ID: "",
    DELIVERY: 0
  }; 

  constructor(
    public employeedService: EmployeedService,
    public configService: ConfigService,
    private rRouter: Router
  ) {
    this.employeed = this.employeedService.getEmployeedSelected();
    this.configService.getConfigApp().subscribe(res => {
      this.configService.setConfig(res as Config);
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    $('.date-picker').datepicker( {
      changeMonth: true,
      changeYear: true,
      showButtonPanel: true,
      dateFormat: 'MM yy',
      onClose: function(dateText, inst) { 
        console.log(inst);
          $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
      }
    });
  } 

  saveConsulta(){
    $("#startDate").removeClass("is-invalid");
    $("#entrega").removeClass("is-invalid");

    var jsDate    = $('.date-picker').datepicker('getDate');
    let deliverys = $("#entrega").val();

    if (jsDate !== null) { // if any date selected in datepicker
        jsDate instanceof Date; // -> true
        console.log(jsDate.getDate());
        console.log(jsDate.getMonth() + 1);
        console.log(jsDate.getFullYear());
    }else{
      console.log("Seleccione una mes a capturar");
      $("#startDate").addClass("is-invalid");
      return false;
    }

    if(deliverys == ""){
      console.log("Coloque algunas entregas para poder continuar");
      $("#entrega").addClass("is-invalid");
      return false;
    }

    this.employeedService.getSalary(this.configService.getConfig(), this.employeed, deliverys, jsDate.getTime()).subscribe(res => {
      let payment = res as Payment;
      this.employeedService.setPaymentCalculate(payment);
      this.rRouter.navigate(["/Home/Pago"]);
    });
  }

}
