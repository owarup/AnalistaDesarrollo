import { Injectable } from '@angular/core';
import { ListaProductosI } from '../../modelo/listaproductos.interface';
import { HttpClient,HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:string = "http://localhost:8080/AnalistaDesarrolloABAP2/api/productos";

  constructor(private http: HttpClient) { }

  getPacientes():Observable<ListaProductosI[]>{
    let direccion = this.url;
    return this.http.get<ListaProductosI[]>(direccion);
  }

  setPeciente(data: any): Observable<any>{
    let direccion = this.url;
    return this.http.post(direccion, data);
  }

  actualizar(id: any, data: any): Observable<any> {
    let direccion = this.url;
    return this.http.put(`${direccion}/${id}`, data);
  }

  elimar(id: any, data: any): Observable<any> {
    let direccion = this.url;
    return this.http.delete(`${direccion}/${id}`, data);
  }

}
