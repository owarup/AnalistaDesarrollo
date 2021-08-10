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
    let direcion = this.url;
    return this.http.get<ListaProductosI[]>(direcion);
  }

}
