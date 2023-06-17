import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationDurations } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Novedades } from 'src/app/models/novedades';
import { NovedadesService } from 'src/app/services/novedades.service';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  myForm!:FormGroup;
  id!:number;

  constructor(private formBuilder: FormBuilder, 
    private newservice:NovedadesService,
    private router:Router,
    private activaterouter:ActivatedRoute,) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm():void{
    this.myForm=this.formBuilder.group(
      {
        id:[""],
        text:["",[Validators.required]],
        date_on:["",[Validators.required,Validators.maxLength(100)]],
        date_of:["",[Validators.required]],
        mall:[null,[Validators.required]],
      }
    );

    this.id=this.activaterouter.snapshot.params["id"];

    if((this.id!=undefined && this.id!=0)){

      this.newservice.getNew(this.id).subscribe(
        (data:Novedades)=>{

          this.myForm.get("text")!.setValue(data.text);
          this.myForm.get("date_on")!.setValue(data.date_on);
          this.myForm.get("date_of")!.setValue(data.date_of);
          this.myForm.get("mall")!.setValue(data.mall);
        
        }
      )
    } else{
      this.id=0;
    }

  }

  saveNew():void{
    const cnew:Novedades={
       id:0,
       text:this.myForm.get("text")?.value,
       date_on:this.myForm.get("date_on")?.value,
       date_of:this.myForm.get("date_of")?.value,
       mall:this.myForm.get("mall")?.value,
    }

    if(this.id==0){

      this.newservice.addNew(cnew).subscribe(
        {
          next: (data) => {
            this.router.navigate(["/admin/novedades"]);
          },
          error:(err)=>{
            console.log(err);
          }
        }
       )
     } else{

        this.newservice.updateNew(cnew).subscribe(
         {
          next: (data) => {
            this.router.navigate(["/admin/novedades"]);
          }, error: (err)=>{
            console.log(err);
          }
         }
        )
     }

 }

}
