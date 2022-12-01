import { Component, OnInit } from '@angular/core';
import { Employeed } from 'src/app/interfaces/employeed.interfase';
import { Roles } from 'src/app/interfaces/roles.interfase';
import { EmployeedService } from 'src/app/services/employeed.service';
import { RolesService } from 'src/app/services/roles.service';
declare var $: any;

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {

  roles:Roles[] = [];
  employeedNew: Employeed = {
    ID: 0,
    R_NAME: "",
    R_ADDITIONAL: "",
    ROLE_ID: 0,
    E_NAME: "",
    E_NUMBER_ID: ""
  };

  roleSelected: Roles = {
    R_ADDITIONAL: "",
    R_NAME: "", 
    ID: 0
  }

  constructor(
    public rolesService: RolesService,
    public employeedService: EmployeedService
  ) {
    this.employeedService.getLastIdEmployeed().subscribe(res => {
      this.employeedNew.ID = parseInt(res['id'] + 1);
      this.rolesService.getListRoles().subscribe(res => {
        this.roles = res as Roles[];
        console.log(this.roles);
      });
    });
  }

  ngOnInit(): void {
  }

  saveRoleSelected(rol){
    console.log(rol);
    console.log(rol.value);
    console.log(rol.id);
    this.roleSelected.ID      = rol.value;
    this.roleSelected.R_NAME  = rol.id;
  }

  save(){
    $(".form-check-input").removeClass("is-invalid");
    $("#name_employeed_e").removeClass("is-invalid");

    if(this.employeedNew.E_NAME == ""){
      console.log("Es necesario colocar un nombre de usuario");
      $("#name_employeed_e").addClass("is-invalid");
      return false;
    }

    if(this.roleSelected.ID == 0){
      console.log("Es necesario seleccionar un rol");
      $(".form-check-input").addClass("is-invalid");
      return false;
    }

    // Creamos el body que se le pasara a la petición
    let body = {
      name: this.employeedNew.E_NAME,
      role: this.roleSelected.ID,
      numberEmployeed: this.employeedNew.ID
    }

    // Guardamos el nuevo usuario con los datos colocados
    this.employeedService.saveEmployeed(body).subscribe(res => {
      console.log(res);
      if(res[0]['codeResponse'] == "0000"){
        console.log("Empleado creado con exito!");
        $(".alertNuevo ").fadeIn();

        setTimeout(function(){
          $(".alertNuevo ").fadeOut();
        }, 1000);

        this.employeedService.getLastIdEmployeed().subscribe(res => {
          this.employeedNew.ID = parseInt(res['id'] + 1);
          this.employeedNew.E_NAME = "";
        });
      }
    });
    
  }
}
