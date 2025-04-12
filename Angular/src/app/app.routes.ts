import { Component } from '@angular/core';
import {Routes } from '@angular/router';
import { InventarioComponent } from './components/inventario/inventario.component';
import { HistorialComponent } from './components/historial/historial.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarProductoComponent } from './components/inventario/registrar-producto/registrar-producto.component';
import { EntradaSalidaComponent } from './components/inventario/entrada-salida/entrada-salida.component';
import { AltaBajaComponent } from './components/inventario/alta-baja/alta-baja.component';
import { login } from './guards/login.guard';
import { roladmin, rolalmacen } from './guards/rol.guard';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
  { path:'', component:MenuComponent,canActivate:[login],
    children:[
      {path:'inventario',component:InventarioComponent ,canActivate:[login],
        children:[
          {path:'registrarproducto',component:RegistrarProductoComponent,canActivate:[roladmin]},
          {path:'entrada',component:EntradaSalidaComponent,canActivate:[roladmin]},
          {path:'salida',component:EntradaSalidaComponent,canActivate:[rolalmacen]},
          {path:'altabaja',component:AltaBajaComponent,canActivate:[roladmin]}
        ]
      },
      {path:'historial',component:HistorialComponent ,canActivate:[login,roladmin]},
    ]
  },
  {path:'login',component:LoginComponent},
  { path: '**', redirectTo: ''}

];
