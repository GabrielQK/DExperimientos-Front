import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { Sugerencias } from 'src/app/models/sugerencias';
import { SugerenciasService } from 'src/app/services/sugerencias.service';
@Component({
  selector: 'app-sugerencias-admin',
  templateUrl: './sugerencias-admin.component.html',
  styleUrls: ['./sugerencias-admin.component.css']
})
export class SugerenciasAdminComponent implements OnInit {

  
  SugerenciaView: Sugerencias[] = [];

  constructor(iconRegistry: MatIconRegistry, 
              sanitizer: DomSanitizer, 
              private SugerenciaService:SugerenciasService) { }

  ngOnInit(): void {
    this.getSugerencia();
  }

  getSugerencia():void{

    this.SugerenciaService.getSugerencias().subscribe(
      respuesta => {
        this.SugerenciaView=respuesta;
      }
    )
   
  };

  deleteSugerencia(id:number):void{
    this.SugerenciaService.deleteSugerencia(id).subscribe(
      {
        next: (data) => {
          this.getSugerencia();
          
        },
        error:(err) =>{
          console.log(err);
        }
        
      })

  }

}
