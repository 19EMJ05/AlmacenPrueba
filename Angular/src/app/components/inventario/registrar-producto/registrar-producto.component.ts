import { ProductosService } from './../../../services/productos.service';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-registrar-producto',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule,FormsModule,MatCardModule,MatButton],
  templateUrl: './registrar-producto.component.html',
  styleUrl: './registrar-producto.component.scss'
})
export class RegistrarProductoComponent {
  form:FormGroup;

  setform():FormGroup{
    return this.formProductos.group({
      nombreproducto:['',[Validators.required]],
      cantidadproducto:[0],
      estatusproducto:[1]
    })
  }
  constructor(private prodservice:ProductosService,
              private formProductos:FormBuilder

  ){
    this.form=this.setform();
  }


  setProducto(){
    if (this.form.valid) {
      console.log(this.form.value);
      this.prodservice.setProducto(this.form.value).subscribe({
        next:()=>{
          alert("Registro Exitoso");
        },error:(error:HttpErrorResponse)=>{
          console.log(error.error);
        }
      })
    }else{
      alert("Favor de ingresar el nombre del producto")
    }

  }

}
