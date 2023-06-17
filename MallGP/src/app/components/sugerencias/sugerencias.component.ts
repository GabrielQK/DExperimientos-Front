import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { Sugerencias } from 'src/app/models/sugerencias';
import { SugerenciasService } from 'src/app/services/sugerencias.service';


@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {

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
}
