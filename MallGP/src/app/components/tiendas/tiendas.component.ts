import { TiendasService } from './../../services/tiendas.service';
import { Tienda } from './../../models/tienda';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  selected=new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectedCategoria:string ="todos";
  tiendasView:Tienda[]=[];
  newTiendaView:Tienda[]=[];

  constructor(private tiendasServices:TiendasService) { }

  ngOnInit(): void {
    this.getTienda();
    this.filtrarCategorias();
  }

  getTienda():void{
    this.tiendasServices.getTiendas().subscribe(
      respuesta=>{
        this.tiendasView=respuesta;
        this.newTiendaView=respuesta;
      }
    )
  }

  filtrarCategorias():void{
    if(this.selectedCategoria != "todos"){
      this.newTiendaView = this.tiendasView.filter( tienda => tienda.category == this.selectedCategoria)
    
    }else{
      this.newTiendaView=this.tiendasView;
    }
  }
}
