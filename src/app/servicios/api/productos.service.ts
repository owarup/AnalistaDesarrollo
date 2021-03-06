import { ResponseI } from './../../modelo/reponse.interface';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosI, ListaProductosI } from 'src/app/modelo/productos.interface';

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

  getPaciente(id: any):Observable<ProductosI>{
    let direccion = this.url;
    return this.http.get<ProductosI>(`${direccion}/${id}`);
  }

  setPeciente(data: any): Observable<any>{
    let direccion = this.url;
    return this.http.post<ResponseI>(direccion, data);
  }

  actualizar(id: any, data: any): Observable<any> {
    let direccion = this.url;
    return this.http.put<ResponseI>(`${direccion}/${id}`, data);
  }

  eliminar(id: any): Observable<any> {
    let direccion = this.url;
    return this.http.delete<ResponseI>(`${direccion}/${id}` );
  }



}
