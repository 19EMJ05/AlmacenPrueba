import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private urlApi=`${environment.apiUrl}/historico`;
  constructor(private http:HttpClient) { }
  getAllhistorico(){
    return this.http.get(this.urlApi);
  }
}
