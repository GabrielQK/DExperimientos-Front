import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationDurations } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  myForm!:FormGroup;
  id!:number;

  constructor(
    private formBuilder: FormBuilder, 
    private productservice: ProductService,
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
        description:["",[Validators.required]],
        price:["",[Validators.required]],
        gender:["",[Validators.required]],
        img:["",[Validators.required]]
      }
    );

    this.id=this.activaterouter.snapshot.params["id"];

    if((this.id!=undefined && this.id!=0)){

      this.productservice.getProducto(this.id).subscribe(
        (data:Product)=>{

          this.myForm.get("name")!.setValue(data.name);
          this.myForm.get("category")!.setValue(data.category);
          this.myForm.get("descriptiom")!.setValue(data.description);
          this.myForm.get("price")!.setValue(data.price);
          this.myForm.get("gender")!.setValue(data.gender);
          this.myForm.get("img")!.setValue(data.img);
        }
      )
    } else{
      this.id=0;
    }

  }

  saveProduct():void{
    const cproduct:Product={
       id:0,
       name:this.myForm.get("name")?.value,
       category:this.myForm.get("category")?.value,
       description:this.myForm.get("description")?.value,
       price:this.myForm.get("price")?.value,
       gender:this.myForm.get("gender")?.value,
       img:this.myForm.get("img")?.value
    }

    if(this.id==0){

      this.productservice.addProducto(cproduct).subscribe(
        {
          next: (data) => {
            this.router.navigate(["/admin/producto"]);
          },
          error:(err)=>{
            console.log(err);
          }
        }
       )
     } else{

        this.productservice.updateProducto(cproduct).subscribe(
         {
          next: (data) => {
            this.router.navigate(["/admin/producto"]);
          }, error: (err)=>{
            console.log(err);
          }
         }
        )
     }

 }

}
