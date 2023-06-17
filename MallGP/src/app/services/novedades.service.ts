import { environment } from './../../environments/environment';
import { Novedades } from 'src/app/models/novedades';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {

   resourcePath: string = environment.serverJSON+environment.resourceNovedades;
  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get<Novedades[]>(this.resourcePath)
  }
  deleteTienda(id:number){
    return this.http.delete(this.resourcePath+"/"+id.toString());
  }

  getNew(id:number){
    return this.http.get<Novedades>(this.resourcePath+"/"+id.toString());
  }

  addNew(ppromocion:Novedades){
    return this.http.post<Novedades>(this.resourcePath,ppromocion);
  }

  updateNew(ppromocion:Novedades){
    return this.http.put<Novedades>(this.resourcePath+"/"+ppromocion.id.toString(),ppromocion);
  }
}
