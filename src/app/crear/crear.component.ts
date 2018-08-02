import { Component } from '@angular/core';
import { LugaresService, LugaresService } from '../services/lugares.service';


@Component ({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
 // styleUrls: ['./crear.component.css']
})

export class CrearComponent {
  lugar:any = {}
  constructor (private lugaresService: LugaresService) {

  }
  guardarLugar() {
    this.lugaresService.guardarLugar(this.lugar)
  }
}