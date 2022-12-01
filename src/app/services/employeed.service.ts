import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { Employeed } from '../interfaces/employeed.interfase';
import { Payment } from '../interfaces/payment.interfase';

@Injectable({
  providedIn: 'root'
})
export class EmployeedService {

  employedSelected: Employeed;
  paymentCalculate: Payment = {
    payment: 0,
    hours: 0,
    paymentDelivery: 0,
    paymentBonds: 0,
    isr: 0,
    vouchers: 0,
    totalPayment: 0,
    nameEmployeed: "",
    numberEmployeed: "",
    rolEmployeed: "",
    dateResumen: ""
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Guardamos la información del empleado seleccionado
   * @param employeed Información del empleado seleccionado
   */
  setEmployeedSelected(employeed){
    this.employedSelected = employeed;
  }

  /**
   * Regresamos la información del empleado seleccionado
   * @returns Employeed
   */
  getEmployeedSelected(){
    return this.employedSelected;
  }

  /**
   * Obtiene la lista de empleados que se muestra en el Dashboard
   * @returns Observable
   */
  getListEmployeed(){
    return this.httpClient.get("/ApiConnect/list/employeed");
  }

  /**
   * Guarda el empleado nuevo con los datos capturados en el FrontEnd
   * @param body Objeto que se anexa en la petición y se coloca l información a guardar
   * @returns Observable
   */
  saveEmployeed(body){
    return this.httpClient.post("/ApiConnect/add/employeed", body);
  }

  /**
   * Obtenemos el numero de ID de Empleado mas alto
   * @returns Observable
   */
  getLastIdEmployeed(){
    return this.httpClient.get("/ApiConnect/last/id/employeed");
  }

  /**
   * Se guarda el pago calculado de acuerdo a los datos menciondos
   * @param payment pago calculado
   */
  setPaymentCalculate(payment){
    this.paymentCalculate = payment
  }
  
  /**
   * Regresa el pago calculado
   * @returns Payment
   */
  getPaymentCalculate(){
    return this.paymentCalculate;
  }
  
  /**
   * Calcula el salario del usuario
   * @param config Cofniguración obtenida de la apliucación
   * @param employeed Dato del usuario
   * @param deliverys Entregas realizadas
   * @param date Fecha en que se realizo la entrega
   * @returns 
   */
  getSalary(config: Config[], employeed: Employeed, deliverys, date){
    let body = {
      config: config,
      employeed: employeed,
      deliverys: deliverys,
      date: date
    }
    return this.httpClient.post("/ApiConnect/payment/employeed", body);
  }

}
