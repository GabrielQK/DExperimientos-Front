import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectedGenero: string = "todos";
  productView: Product[] = [];
  newProductView: Product[] = [];

  constructor(private ProductServices:ProductService) { }

  ngOnInit(): void {

    this.getProduct();
    this.filtrarGenero();

  }

  getProduct():void{

    this.ProductServices.getProductos().subscribe(
      respuesta => {
        this.productView=respuesta;
        this.newProductView=respuesta;
      }
    )
   
  };

  filtrarGenero(): void {
    
    if (this.selectedGenero != "todos"){
      this.newProductView = this.productView.filter( producto => producto.gender == this.selectedGenero)
      
    } else {
      this.newProductView = this.productView
    }

  }

  deleteProduct(id:number):void{
    this.ProductServices.deleteProduct(id).subscribe(
      {
        next: (data) => {
          this.getProduct();
          
        },
        error:(err) =>{
          console.log(err);
        }
        
      })

  }

}
