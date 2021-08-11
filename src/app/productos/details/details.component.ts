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
  }

  postForm(form:ProductosI){
    let productoId = this.activeRouter.snapshot.paramMap.get('id');
    //console.log(productoId);
    this.api.actualizar(productoId, form).subscribe( data =>{
        let respuesta:ResponseI = data;
        console.log(respuesta);
        if(respuesta.status == "ok"){
            this.alertas.showSuccess('Datos modificados','Hecho');
        }else{
          console.log("Error en mesaje");
            //this.alertas.showError(respuesta.result.error_msg,'Error');
            this.alertas.showError('respuesta.result.error_msg','Error');

        }
    })
  }
/*
  eliminar((id:any, form:ProductosI){
    let datos:ProductosI = this.editarForm.value;
    this.api.deleteProducto(datos).subscribe(data =>{
      let respuesta:ResponseI = data;
        if(respuesta.status == "ok"){
            this.alertas.showSuccess('Paciente eliminado','Hecho');
            this.router.navigate(['dashboard']);
        }else{
            this.alertas.showError(respuesta.result.error_msg,'Error');
        }
    })
  }
*/

  salir(){
    this.router.navigate(['list-productos']);
  }

}
