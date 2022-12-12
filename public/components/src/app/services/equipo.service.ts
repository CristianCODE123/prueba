import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url:string = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  listEquipos(){
    return this.http.get<any>(this.url+'/api/equipos');
  }
httpOptions = {
  headers : new HttpHeaders({
    'Content-type': 'application/json'
  })
}
  addEquipo(equipo:any): Observable<any>{
    return this.http.post<any>(this.url+'/api/equipos', equipo, this.httpOptions)
  }

  find(id:number):Observable<any>{
    return this.http.get(this.url+'/api/equipo/'+id);
  }
  
  update(id:number, equipo:any):Observable<any>{
    return this.http.put(this.url+'/api/equipo/'+id,equipo, this.httpOptions);
  }

  deleteEquipo(id:any):Observable<any>{
    return this.http.delete<any>(this.url+'/api/equipo/'+id,this.httpOptions);
  }
  updateStatus(id:number,estado:number):Observable<any>{
    return this.http.put<any>(this.url+'/api/equipoStat/'+id,estado,this.httpOptions);
  }
}
