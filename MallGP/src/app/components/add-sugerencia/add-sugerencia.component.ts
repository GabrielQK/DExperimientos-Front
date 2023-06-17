import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationDurations } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Sugerencias } from 'src/app/models/sugerencias';
import { SugerenciasService } from 'src/app/services/sugerencias.service';

@Component({
  selector: 'app-add-sugerencia',
  templateUrl: './add-sugerencia.component.html',
  styleUrls: ['./add-sugerencia.component.css']
})
export class AddSugerenciaComponent implements OnInit {

  myForm!:FormGroup;
  id!:number;

  constructor(
    private formBuilder: FormBuilder, 
    private sugerenciaservice: SugerenciasService,
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
        nsugerencia:["",[Validators.required]],
        contenido:["",[Validators.required,Validators.maxLength(100)]],
        datesugerencia:[""]
      }
    );

    this.id=this.activaterouter.snapshot.params["id"];

    if((this.id!=undefined && this.id!=0)){

      this.sugerenciaservice.getSugerencia(this.id).subscribe(
        (data:Sugerencias)=>{

          this.myForm.get("nsugerencia")!.setValue(data.nsugerencia);
          this.myForm.get("contenido")!.setValue(data.contenido);
        }
      )
    } else{
      this.id=0;
    }

  }

  saveSugerencia():void{
    const csugerencia:Sugerencias={
       id:0,
       nsugerencia:this.myForm.get("nsugerencia")?.value,
       contenido:this.myForm.get("contenido")?.value,
       datesugerencia:this.myForm.get("date")?.value
    }

    if(this.id==0){

      this.sugerenciaservice.addSugerencia(csugerencia).subscribe(
        {
          next: (data) => {
            this.router.navigate(["/sugerencias"]);
          },
          error:(err)=>{
            console.log(err);
          }
        }
       )
     } else{

        this.sugerenciaservice.updateSugerencia(csugerencia).subscribe(
         {
          next: (data) => {
            this.router.navigate(["/sugerencias"]);
          }, error: (err)=>{
            console.log(err);
          }
         }
        )
     }

 }
 
}
