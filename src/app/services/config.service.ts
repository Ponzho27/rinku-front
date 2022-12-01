import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../interfaces/config.interfase';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: Config [] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Guarda la información de la configuración
   * @param config Información de la configuración
   */
  setConfig(config){
    this.config = config;
  }

  /**
   * Regresa la información de la configuración
   * @returns Config
   */
  getConfig(){
    return this.config;
  }

  getConfigApp(){
    return this.httpClient.get("/ApiConnect/config");
  }
}
