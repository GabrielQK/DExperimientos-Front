import { Component, OnInit } from '@angular/core';
import { TiendasService } from './../../services/tiendas.service';
import { Tienda } from './../../models/tienda';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-tiendas-admin',
  templateUrl: './tiendas-admin.component.html',
  styleUrls: ['./tiendas-admin.component.css']
})
export class TiendasAdminComponent implements OnInit {

  selected=new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectedCategoria:string ="todos";
  tiendasView:Tienda[]=[];
  newTiendaView:Tienda[]=[];

  constructor(private tiendasServices:TiendasService) { }

  ngOnInit(): void {
    this.getTiendas();
    this.filtrarCategorias();
  }

  getTiendas():void{
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

  deleteTienda(id:number):void{
    this.tiendasServices.deleteTienda(id).subscribe(
      {
        next: (data) => {
          this.getTiendas();
          
        },
        error:(err) =>{
          console.log(err);
        }
        
      })

  }


}
