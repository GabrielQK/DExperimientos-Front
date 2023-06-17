import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationDurations } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Promocion } from 'src/app/models/promociones';
import { PromocionesService } from 'src/app/services/promociones.service';

@Component({
  selector: 'app-add-promociones',
  templateUrl: './add-promociones.component.html',
  styleUrls: ['./add-promociones.component.css']
})
export class AddPromocionesComponent implements OnInit {

  myForm!:FormGroup;
  id!:number;
  constructor(
    private formBuilder: FormBuilder, 
    private promocionesservice: PromocionesService,
    private router:Router,
    private activaterouter:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm():void{
    this.myForm=this.formBuilder.group(
      {
        id:[""],
        name:["",[Validators.required]],
        name_product:["",[Validators.required]],
        gender_product:["",[Validators.required]],
        precio_s_desc:["",[Validators.required]],
        precio_c_desc:["",[Validators.required]],
        date_on:["",[Validators.required]],
        date_of:["",[Validators.required]],
        img:["",[Validators.required]],
        store:[null,[Validators.required]],
        product:[null,[Validators.required]],
      }
    );

    this.id=this.activaterouter.snapshot.params["id"];

    if((this.id!=undefined && this.id!=0)){

      this.promocionesservice.getPromocion(this.id).subscribe(
        (data:Promocion)=>{

          this.myForm.get("name")!.setValue(data.name);
          this.myForm.get("name_product")!.setValue(data.name_product);
          this.myForm.get("gender_product")!.setValue(data.gender_product);
          this.myForm.get("precio_s_desc")!.setValue(data.precio_s_desc);
          this.myForm.get("precio_c_desc")!.setValue(data.precio_c_desc);
          this.myForm.get("date_on")!.setValue(data.date_on);
          this.myForm.get("date_of")!.setValue(data.date_of);
          this.myForm.get("img")!.setValue(data.img);
        }
      )
    } else{
      this.id=0;
    }

  }

  savePromocion():void{
    const cpromocion:Promocion={
       id:0,
       name:this.myForm.get("name")?.value,
       name_product:this.myForm.get("name_product")?.value,
       gender_product:this.myForm.get("gender_product")?.value,
       precio_s_desc:this.myForm.get("precio_s_desc")?.value,
       precio_c_desc:this.myForm.get("precio_c_desc")?.value,
       date_on:this.myForm.get("date_on")?.value,
       date_of:this.myForm.get("date_of")?.value,
       store:this.myForm.get("store")?.value,
       product:this.myForm.get("store")?.value,
       img:this.myForm.get("img")?.value,
    }

    if(this.id==0){

      this.promocionesservice.addPromocion(cpromocion).subscribe(
        {
          next: (data) => {
            this.router.navigate(["/admin/promociones"]);
          },
          error:(err)=>{
            console.log(err);
          }
        }
       )
     } else{

        this.promocionesservice.updatePromocion(cpromocion).subscribe(
         {
          next: (data) => {
            this.router.navigate(["/admin/promociones"]);
          }, error: (err)=>{
            console.log(err);
          }
         }
        )
     }

 }

}
