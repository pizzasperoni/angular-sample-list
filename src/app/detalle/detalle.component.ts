import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent {

  id=null
  lugar:any = {}
  lugares = []
  constructor(private route:ActivatedRoute, private lugaresService:LugaresService){
    console.log(this.route.snapshot.params['id'])
    console.log(this.route.snapshot.queryParams['action'])
    console.log(this.route.snapshot.queryParams['referer'])
    this.id=this.route.snapshot.params['id']
    this.lugar = this.lugaresService.buscarLugar(this.id)

  }

  buscarLugar(){
    return this.lugares.filter((lugar)=> {return lugar.id == this.id}) [0] || null
  }
}