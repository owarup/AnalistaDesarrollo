import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ProductosService } from 'src/app/servicios/api/productos.service';

import { ProductosI } from '../../modelo/productos.interface';
import { ResponseI } from './../../modelo/reponse.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  constructor(private activeRouter:ActivatedRoute , private router:Router, private api:ProductosService, private alertas:AlertasService) { }

  datosProducto:ProductosI | undefined;

  editarForm = new FormGroup({
    color: new FormControl(''),
    dimension: new FormControl(''),
    capacidad: new FormControl(''),
    modelo: new FormControl(''),
    material: new FormControl(''),
    calidad: new FormControl(''),
    cantidad: new FormControl(''),
  });

  ngOnInit(): void {
    let productoId = this.activeRouter.snapshot.paramMap.get('id');
    this.api.getPaciente(productoId).subscribe(data=>{
      this.datosProducto = data;
      this.editarForm.setValue({
        'color':this.datosProducto.color,
        'dimension':this.datosProducto.dimension,
        'capacidad':this.datosProducto.capacidad,
        'modelo':this.datosProducto.modelo,
        'material':this.datosProducto.material,
        'calidad':this.datosProducto.calidad,
        'cantidad':this.datosProducto.cantidad
      });

    })
  }

  postForm(form:ProductosI){
    let productoId = this.activeRouter.snapshot.paramMap.get('id');
    //console.log(productoId);
    this.api.actualizar(productoId, form).subscribe( data =>{
        let respuesta:ResponseI = data;
        console.log(respuesta.result);
        if(respuesta.status == "ok"){
            this.alertas.showSuccess('Datos modificados','Hecho');
            this.salir();
        }else{
          console.log("Error en mesaje");
            //this.alertas.showError(respuesta.result.error_msg,'Error');
          this.alertas.showError('respuesta.result.error_msg','Error');

        }
    })
  }


  salir(){
    this.router.navigate(['list-productos']);
  }

}
