import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promocion } from '../models/promociones';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  resourcePath: string = environment.serverJSON+environment.resourceOffers;

  constructor(private http: HttpClient) { }

  getPromociones(){
    return this.http.get<Promocion[]>(this.resourcePath)
  }

  getPromocion(id:number){
    return this.http.get<Promocion>(this.resourcePath+"/"+id.toString());
  }

  addPromocion(ppromocion:Promocion){
    return this.http.post<Promocion>(this.resourcePath,ppromocion);
  }

  updatePromocion(ppromocion:Promocion){
    return this.http.put<Promocion>(this.resourcePath+"/"+ppromocion.id.toString(),ppromocion);
  }

  deletePromocion(id:number){
    return this.http.delete(this.resourcePath+"/"+id.toString());
  }
  

}
