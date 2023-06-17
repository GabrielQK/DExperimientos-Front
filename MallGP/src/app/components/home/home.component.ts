import { MallsService } from './../../services/malls.service';
import { Mall } from './../../models/mall';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selected=new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectedCiudad:string = "todos";
  mallsView:Mall[]=[];
  newMallView:Mall[]=[];


  constructor(private mallsServices:MallsService) { }

  ngOnInit(): void { 
   this.getMall();
   this.filtrarCiudades();
  }

  getMall():void{
    this.mallsServices.getMalls().subscribe(
      respuesta=>{
        this.mallsView=respuesta;
        this.newMallView=respuesta;
      }
    )
  }

  filtrarCiudades(): void {
    
    if (this.selectedCiudad != "todos"){
      this.newMallView = this.mallsView.filter( mall => mall.location == this.selectedCiudad)
      
    } else {
      this.newMallView = this.mallsView
    }

  }

}
