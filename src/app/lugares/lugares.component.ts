import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['lugares.component.css']
})

export class LugaresComponent {
  title = 'Platzi-Squear';
  lugares = null;
  constructor (private lugaresService: LugaresService){
    this.lugares = lugaresService.getLugares()
  }

  lat:number = -27.448712
  lng:number = -58.996193
  valor:number = 17

}