import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeed } from 'src/app/interfaces/employeed.interfase';
import { EmployeedService } from 'src/app/services/employeed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listEmployeed: Employeed[] = [];
  listEmployeedC: Employeed[] = [];
  strSearch: String = "";
  
  constructor(
    public employeedService: EmployeedService,
    private rRouter: Router
  ) {
    this.employeedService.getListEmployeed().subscribe(res => {
      console.log(res);

      this.listEmployeed = res as Employeed[];
      this.listEmployeedC = res as Employeed[];

      this.listEmployeed = this.listEmployeed.sort((a, b) =>  parseInt(a.E_NUMBER_ID.toString()) - parseInt(b.E_NUMBER_ID.toString()))
      this.listEmployeedC = this.listEmployeedC.sort((a, b) =>  parseInt(a.E_NUMBER_ID.toString()) - parseInt(b.E_NUMBER_ID.toString()))

    });
  }

  ngOnInit(): void {
  }

  /**
   * Redirige a la pantalla de captura de mes y guarda la información del empleado seleccionado
   * @param employeed información del empleado
   */
  capturarMes(employeed){
    console.log(employeed);
    this.employeedService.setEmployeedSelected(employeed);
    this.rRouter.navigate(['/Home/Captura']);
  }

  /**
   * Buscar entre nombre del usuario y id del usuario
   * @param strFilter Texto que tiene el input de busqueda
   */
  filterItem(strFilter){
    console.log(strFilter);
    if(!strFilter){
      this.listEmployeedC = Object.assign([], this.listEmployeed);
    }else{
      this.listEmployeedC = Object.assign([], this.listEmployeed).filter(item => {
        if( item.E_NUMBER_ID.toString().toLowerCase().indexOf(strFilter) > -1 || 
        item.E_NAME.toString().toLowerCase().indexOf(strFilter) > -1){
          return item;
        }
      });
    }
  }
}
