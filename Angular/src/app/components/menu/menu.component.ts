import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatButtonModule,MatToolbarModule,MatMenuModule,MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  title = 'FrontendPruebaTec';
  permiso="";
  nombre_user:string;
  rol_user:string;
  constructor(private route:Router){
    if(sessionStorage.getItem("sesion")){
      this.route.navigate([""]);
    }else{
      this.route.navigate(["login"]);
    }
    this.nombre_user=localStorage.getItem("nombreUser")||"";
    if(localStorage.getItem("rolUser")=="1"){
      this.rol_user="Admin";
    }else{
      this.rol_user="Almacenista";
    }
    this.permiso=localStorage.getItem("rolUser")||"";
    this.roles(this.permiso);
  }
  menuInventarioeRegistrarproducto=false;
  menuinventarioEntrada=false;
  menuinventarioAltabaja=false;
  menuinventarioSalida=false;
  menuhistorial=false;

  roles(idRol:string){
    if(idRol=="1"){//admin
      this.menuInventarioeRegistrarproducto=true;
      this.menuinventarioEntrada=true;
      this.menuinventarioAltabaja=true;
      this.menuinventarioSalida=false;
      this.menuhistorial=true;
    }else if(idRol=="2"){//almacen
      this.menuInventarioeRegistrarproducto=false;
      this.menuinventarioEntrada=false;
      this.menuinventarioAltabaja=false;
      this.menuinventarioSalida=true;
      this.menuhistorial=false;
    }
  }
  salir(){
    localStorage.clear();
    sessionStorage.clear();
    this.route.navigate(["login"]);
    this.nombre_user="";
    this.rol_user="";

  }
}
