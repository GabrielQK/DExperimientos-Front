import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  
  resourcePath: string = environment.serverJSON+environment.resourceAdmins;
  constructor(private http:HttpClient) { }

  exportAdmins(){
    return this.http.get(this.resourcePath+"/"+"export/excel",{
      responseType: "blob"
    });
  }
}
