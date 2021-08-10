import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/api/productos.service'
import { Router } from '@angular/router';

import { ListaProductosI } from '../../modelo/listaproductos.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productos: ListaProductosI[] = [];

  constructor(private Producto:ProductosService, private router:Router) { }

  ngOnInit(): void {
    this.Producto.getPacientes().subscribe(data =>{
      this.productos = data;
      console.log(data);
    })
  }

  editarProducto(id: number){
    console.log(id)

  }

}
