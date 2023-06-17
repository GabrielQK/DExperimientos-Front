import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Promocion } from 'src/app/models/promociones';
import { PromocionesService } from 'src/app/services/promociones.service';

@Component({
  selector: 'app-promociones-admin',
  templateUrl: './promociones-admin.component.html',
  styleUrls: ['./promociones-admin.component.css']
})
export class PromocionesAdminComponent implements OnInit {

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectedGenero: string = "todos";
  promoView: Promocion[] = [];
  newPromoView: Promocion[] = [];

  constructor(private PromoServices:PromocionesService) { }

  ngOnInit(): void {

    this.filtrarGenero();
    this.getPromocion();

  }

  getPromocion():void{

    this.PromoServices.getPromociones().subscribe(
      respuesta => {
        this.promoView=respuesta;
        this.newPromoView=respuesta;
      }
    )
   
  };

  filtrarGenero(): void {
    
    if (this.selectedGenero != "todos"){
      this.newPromoView = this.promoView.filter( promocion => promocion.gender_product == this.selectedGenero)
    } else {
      this.newPromoView = this.promoView
    }

  }

  deletePromocion(id:number):void{
    this.PromoServices.deletePromocion(id).subscribe(
      {
        next: (data) => {
          this.getPromocion();
          
        },
        error:(err) =>{
          console.log(err);
        }
        
      })

  }
}
