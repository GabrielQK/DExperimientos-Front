import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sugerencias } from '../models/sugerencias';

@Injectable({
  providedIn: 'root'
})
export class SugerenciasService {

  resourcePath: string = environment.serverJSON+environment.resourceSugerencias;

  constructor(private http: HttpClient) { }

  getSugerencias(){
    return this.http.get<Sugerencias[]>(this.resourcePath)
  }

  getSugerencia(id:number){
    return this.http.get<Sugerencias>(this.resourcePath+"/"+id.toString());
  }

  addSugerencia(psugerencias:Sugerencias){
    return this.http.post<Sugerencias>(this.resourcePath,psugerencias);
  }

  updateSugerencia(psugerencias:Sugerencias){
    return this.http.put<Sugerencias>(this.resourcePath+"/"+psugerencias.id.toString(),psugerencias);
  }
  deleteSugerencia(id:number){
    return this.http.delete(this.resourcePath+"/"+id.toString());
  }
}
