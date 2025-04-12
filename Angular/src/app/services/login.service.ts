import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlApi=`${environment.apiUrl}/usuario`;

  constructor(private http:HttpClient) {
  }
  public getAccess(id:number,pass:string){
    return this.http.get(this.urlApi+"/"+id+"/"+pass);
  }
  public getUser(id:number){
    return this.http.get(this.urlApi+"/login/"+id);
  }
}
