import { Component, OnInit } from '@angular/core';
import { NovedadesService } from './../../services/novedades.service';
import { Novedades } from 'src/app/models/novedades';

@Component({
  selector: 'app-novedades-admin',
  templateUrl: './novedades-admin.component.html',
  styleUrls: ['./novedades-admin.component.css']
})
export class NovedadesAdminComponent implements OnInit {

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

  deleteNovedad(id:number):void{
    this.NovedadesService.deleteTienda(id).subscribe(
      {
        next: (data) => {
          this.getNews();
          
        },
        error:(err) =>{
          console.log(err);
        }
        
      })

  }



}
