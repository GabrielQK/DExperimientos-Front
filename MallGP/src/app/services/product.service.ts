import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  resourcePath: string = environment.serverJSON+environment.resourceProducts;
  constructor(private http: HttpClient) { }

  
  getProductos(){
    return this.http.get<Product[]>(this.resourcePath)
  }

  getProducto(id:number){
    return this.http.get<Product>(this.resourcePath+"/"+id.toString());
  }

  addProducto(pproducto:Product){
    return this.http.post<Product>(this.resourcePath,pproducto);
  }

  updateProducto(pproducto:Product){
    return this.http.put<Product>(this.resourcePath+"/"+pproducto.id.toString(),pproducto);
  }

  deleteProduct(id:number){
    return this.http.delete(this.resourcePath+"/"+id.toString());
  }
}
