import { environment } from './../../environments/environment';
import { Tienda } from '../models/tienda';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TiendasService {

  constructor(private http:HttpClient) { }

  resourcePath: string = environment.serverJSON+environment.resourceTiendas;
  getTiendas(){
    return this.http.get<Tienda[]>(this.resourcePath)
  }

  
  getTienda(id:number){
    return this.http.get<Tienda>(this.resourcePath+"/"+id.toString());
  }

  addTienda(ptienda:Tienda){
    return this.http.post<Tienda>(this.resourcePath,ptienda);
  }

  updateTienda(ptienda:Tienda){
    return this.http.put<Tienda>(this.resourcePath+"/"+ptienda.id.toString(),ptienda);
  }

  deleteTienda(id:number){
    return this.http.delete(this.resourcePath+"/"+id.toString());
  }
}
