import { ExportComponent } from './../components/export/export.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExportsService {

  resourcePath_suggestion: string = environment.serverJSON+environment.resourceSugerencias;//hecho
  resourcePath_admin: string = environment.serverJSON+environment.resourceAdmins; //hehco
  resourcePath_new: string = environment.serverJSON+environment.resourceNovedades; //hecho
  resourcePath_store: string = environment.serverJSON+environment.resourceTiendas; //hecho
  resourcePath_offer: string = environment.serverJSON+environment.resourceOffers; //hehco
  resourcePath_mall: string = environment.serverJSON+environment.resourceMalls; //hecho
  resourcePath_product: string = environment.serverJSON+environment.resourceProducts; //hecho
  resourcePath_product_store: string =environment.serverJSON+environment.resourceProductStore;
  resourcePath_store_mall:string=environment.serverJSON+environment.resourceStoreMall;

  constructor(private http:HttpClient) { }

  exportSugerencias(){
    return this.http.get(this.resourcePath_suggestion+"/"+"export/excel",{
      responseType:"blob"
    });
  }

  exportAdmin(){
    return this.http.get(this.resourcePath_admin+"/"+"export/excel",{
      responseType:"blob"
    });
  }

  exportNew(){
    return this.http.get(this.resourcePath_new+"/"+"export/excel",{
      responseType:"blob"
    });
  }

  exportStore(){
    return this.http.get(this.resourcePath_store+"/"+"export/excel",{
      responseType:"blob"
    });
  }

  exportOffer(){
    return this.http.get(this.resourcePath_offer+"/"+"export/excel",{
      responseType:"blob"
    });
  }

  exportMall(){
    return this.http.get(this.resourcePath_mall+"/"+"export/excel",{
      responseType:"blob"
    });
  }

  exportProduct(){
    return this.http.get(this.resourcePath_product+"/"+"export/excel",{
      responseType:"blob"
    });
  }

  exportProductStore(){
    return this.http.get(this.resourcePath_product_store+"/"+"export/excel",{
      responseType:"blob"
    });
  }

  exportStoreMall(){
    return this.http.get(this.resourcePath_store_mall+"/"+"export/excel",{
      responseType:"blob"
    });
  }

}
