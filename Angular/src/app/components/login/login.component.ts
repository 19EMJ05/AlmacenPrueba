import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormsModule, FormBuilder, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatCardModule,MatButton,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
form:FormGroup;
setform():FormGroup{
  return this.formlogin.group({
    idusuario:['',[Validators.minLength(6),Validators.maxLength(6),Validators.required]],
    contrasena:['',[Validators.required]]
  });
}
  constructor(private formlogin:FormBuilder, private loginsercice:LoginService,private router: Router){
    this.form=this.setform();
  }
  getAcces(){
    if(this.form.valid){
      this.loginsercice.getAccess(this.form.value.idusuario,this.form.value.contrasena).subscribe({
        next:(res)=>{
          alert(Object.values(res))
          if(Object.values(res)[0]=="Ingreso Correcto"){
          this.getUser(this.form.value.idusuario);
          }
        }
      })
    }else{
      alert("Favor de llenar los datos correctamente")
    }

  }
  getUser(id:number){
    this.loginsercice.getUser(id).subscribe({
      next:(res)=>{
        localStorage.setItem("iduser",Object.values(res)[0])
        localStorage.setItem("nombreUser",Object.values(res)[1])
        localStorage.setItem("rolUser",Object.values(res)[4])
        sessionStorage.setItem("sesion","activo");
        this.router.navigate([""]);
      }
    });
  }

  filtrar(event: Event) {
    const input = event.target as HTMLInputElement;
    const sanitizedValue = input.value.replace(/[^0-9]/g, ''); // Elimina todo excepto números
    input.value = sanitizedValue; // Asigna solo números al input
  }
}
//100001 ana12345
