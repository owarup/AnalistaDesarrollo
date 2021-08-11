import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from '../../servicios/alertas/alertas.service';
import { ProductosService } from '../../servicios/api/productos.service'

import { ProductosI } from '../../modelo/productos.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  nuevoForm = new FormGroup({
    color: new FormControl(''),
    dimension: new FormControl(''),
    capacidad: new FormControl(''),
    modelo: new FormControl(''),
    material: new FormControl(''),
    calidad: new FormControl(''),
    cantidad: new FormControl(''),
  });

  constructor(private api:ProductosService, private activeRouter: ActivatedRoute, private router:Router,  private alertas:AlertasService) { }

  ngOnInit(): void {
    let productoId = this.activeRouter.snapshot.paramMap.get('id')
    console.log(productoId);
  }

  postForm(form:ProductosI){
    this.api.setPeciente(form).subscribe(data => {
      console.log(data);
    });
    this.salir();//revisar para salir al guardar
  }

  salir(){
    this.router.navigate(['list-productos']);
  }

}
