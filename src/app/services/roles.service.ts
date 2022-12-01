import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Obtiene la lista de Roles guardada en la Base de Datos
   * @returns Obserbable
   */
  getListRoles(){
    return this.httpClient.get("/ApiConnect/list/roles");
  }
}
