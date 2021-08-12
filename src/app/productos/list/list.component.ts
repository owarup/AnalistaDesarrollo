import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/api/productos.service'
import { Router } from '@angular/router';

import { ListaProductosI } from '../../modelo/productos.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ResponseI } from 'src/app/modelo/reponse.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productos: ListaProductosI[] = [];

  constructor(private Producto:ProductosService, private router:Router, private alertas:AlertasService) { }

  ngOnInit(): void {
    this.Producto.getPacientes().subscribe(data =>{
      this.productos = data;
      console.log(data);
    })
  }

  editarProducto(id: number){
    console.log(id)
    this.router.navigate(['details-productos', id])

  }

  eliminarProducto(id: number){

    console.log(id);
    this.Producto.eliminar(id).subscribe(
      data =>{
        let respuesta:ResponseI = data;
        if(respuesta.status == "ok"){
            this.alertas.showSuccess('Paciente eliminado','Hecho');
            this.router.navigate(['list-productos']);
        }else{
            this.alertas.showError(respuesta.result.error_msg,'Error');
        }
      }
    );
    this.salir();
  }

  salir(){
    this.router.navigate(['list-productos']);
  }

}
