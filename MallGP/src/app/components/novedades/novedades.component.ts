import { NovedadesService } from './../../services/novedades.service';
import { Component, OnInit } from '@angular/core';
import { Novedades } from 'src/app/models/novedades';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  NovedadesView: Novedades[]=[];

  constructor(private NovedadesService:NovedadesService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews():void{
    this.NovedadesService.getNews().subscribe(
      respuesta =>{
        this.NovedadesView=respuesta;
      }
    )
  }


/*
  novedades: Novedades[] = [
    {
      id: 1,
      text: "Este viernes se presenta un grupo de rock en el patio de comidas",
      date_on: "19-02",
      date_of: "19-14"
    },
    {
      id: 2,
      text: "Por tu compra con un monto de 100 soles en cualquiera de nuestras tiendas participa en la ruleta de preguntas y gana premios",
      date_on: "19-02",
      date_of: "19-14"
    },
    {
      id: 3,
      text: "Este sabado por feria Smart Fit no abrira sus puertas",
      date_on: "19-02",
      date_of: "19-14"
    }
  ]*/
  
}
