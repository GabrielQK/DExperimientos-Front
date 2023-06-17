import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mall } from '../models/mall'; 
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MallsService {

  resourcePath: string = environment.serverJSON+environment.resourceMalls;
  constructor(private http:HttpClient) { }

  getMalls(){
    return this.http.get<Mall[]>(this.resourcePath)
  }


}
