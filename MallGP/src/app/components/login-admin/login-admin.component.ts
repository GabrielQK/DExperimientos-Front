import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/models/admin';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  resourcePath: string = environment.serverJSON+environment.resourceAdmins;
  public form!: FormGroup//add
  loading = false;
  

  constructor(private fb: FormBuilder, private _snackBar:MatSnackBar, private router:Router, private http:HttpClient) { 
    this.form=this.fb.group({
      name:['', Validators.required],
      password:['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.form=this.fb.group({
      name:[''],
      password:['']
    })//add

  }

  ingresar(){
    /*
    console.log(this.form);
    const user=this.form.value.user;
    const password=this.form.value.password;

  
    if(user == 'admin' && password == 'soyadmin'){
      this.fakeLoading();
    }else{
      this.error();
      this.form.reset();
    }*/

    this.http.get<any>(this.resourcePath).subscribe(res=>{
      const name=res.find((a:any)=>{
        return a.name === this.form.value.name && a.password === this.form.value.password
      });
      if(name){
        alert("Logins Success");
        this.form.reset();
        this.router.navigate(['admin/home'])
      }else{
        this.error();
        this.form.reset();
      }
    }, err=>{
      alert("Something went wrong")
    })
  }

  error(){
    this._snackBar.open('Ponga usuario y contraseña validos', '',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['admin/home']);
    }, 100);
  }

  getAdmins(){
    //return this.employees.slice();
    return this.http.get<Admin[]>(this.resourcePath);
  }

  getAdmin(id:number){
    return this.http.get<Admin>(this.resourcePath+"/"+id.toString());
  }

}
