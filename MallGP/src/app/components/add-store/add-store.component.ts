import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationDurations } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Tienda } from 'src/app/models/tienda';
import { TiendasService } from 'src/app/services/tiendas.service';
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  myForm!:FormGroup;
  id!:number;

  constructor(
    private formBuilder: FormBuilder, 
    private tiendaservice: TiendasService,
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
        category:["",[Validators.required,Validators.maxLength(100)]],
        horario:["",[Validators.required]],
        ubicacion:["",[Validators.required]],
        img:["",[Validators.required]]
      }
    );

    this.id=this.activaterouter.snapshot.params["id"];

    if((this.id!=undefined && this.id!=0)){

      this.tiendaservice.getTienda(this.id).subscribe(
        (data:Tienda)=>{

          this.myForm.get("name")!.setValue(data.name);
          this.myForm.get("category")!.setValue(data.category);
          this.myForm.get("horario")!.setValue(data.horario);
          this.myForm.get("ubicacion")!.setValue(data.ubicacion);
          this.myForm.get("img")!.setValue(data.img);
        }
      )
    } else{
      this.id=0;
    }

  }

  saveTienda():void{
    const ctienda:Tienda={
       id:0,
       name:this.myForm.get("name")?.value,
       category:this.myForm.get("category")?.value,
       horario:this.myForm.get("horario")?.value,
       ubicacion:this.myForm.get("ubicacion")?.value,
       img:this.myForm.get("img")?.value
    }

    if(this.id==0){

      this.tiendaservice.addTienda(ctienda).subscribe(
        {
          next: (data) => {
            this.router.navigate(["/admin/store"]);
          },
          error:(err)=>{
            console.log(err);
          }
        }
       )
     } else{

        this.tiendaservice.updateTienda(ctienda).subscribe(
         {
          next: (data) => {
            this.router.navigate(["/admin/store"]);
          }, error: (err)=>{
            console.log(err);
          }
         }
        )
     }

 }


}
