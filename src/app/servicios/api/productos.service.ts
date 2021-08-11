import { ResponseI } from './../../modelo/reponse.interface';
import { Injectable } from '@angular/core';
import { ListaProductosI } from '../../modelo/listaproductos.interface';
import { HttpClient,HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosI } from 'src/app/modelo/productos.interface';

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
