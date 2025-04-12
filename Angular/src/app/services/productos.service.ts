import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProductosModel} from '../models/ProductoModel';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlApi=`${environment.apiUrl}/inventario`
  constructor(private http:HttpClient) {

  }
  setProducto(producto:ProductosModel){
    return this.http.post(this.urlApi,producto)
  }
  getAllProducto(){
    return this.http.get(this.urlApi)
  }

  updateEstatus(id:number,estatus:number){
    return this.http.patch(this.urlApi+"/"+id+"/"+estatus,null);
  }
  updateCantidad(idproducto:number,cantidad:number,/*idpersonal:number,*/tipomov:string){
    return this.http.patch(this.urlApi+"/"+idproducto+"/"+cantidad+"/"+localStorage.getItem("iduser")+"/"+tipomov,null);
  }
}
