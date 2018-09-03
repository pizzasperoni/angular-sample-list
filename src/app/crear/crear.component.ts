import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';


@Component ({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
 // styleUrls: ['./crear.component.css']
})

export class CrearComponent {
  lugar:any = {}
  constructor (private lugaresService: LugaresService) {

  }
  id:string = 'ZGDPrUMZieqpqcTdrXQO';
  buscarLugar() {
    console.log(this.id)
    console.log(this.lugaresService.buscarLugar(this.id))
  }
}