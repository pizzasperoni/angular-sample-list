import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})

export class DetalleComponent {
  lugares:any = [
    {id:1 ,plan:'pagado',cercania: 1, distancia: 1, active: true, nombre:"Floreria la flor", description: 'lorem ipsum dolor sit amet'},
    {id:2 ,plan:'gratuito',cercania: 2, distancia: 5, active: true, nombre:"Jugueteria el juguete", description: 'lorem ipsum dolor sit amet'},
    {id:3 ,plan:'pagado',cercania: 2, distancia: 4, active: true, nombre:"Gomeria la goma", description: 'lorem ipsum dolor sit amet'},
    {id:4 ,plan:'pagado',cercania: 1, distancia: 2, active: true, nombre:"Relojeria el reloj", description: 'lorem ipsum dolor sit amet'},
    {id:5 ,plan:'gratuito',cercania: 3, distancia: 10, active: true, nombre:"Chapa y pintura la chapa", description: 'lorem ipsum dolor sit amet'},
    {id:6 ,plan: 'gratuito',cercania: 3, distancia: 20, active: true, nombre:"La oficina de globant", description:'lorem ipsum dolor sit amet'}
  ]
  id=null
  lugar:any = {}
  constructor(private route:ActivatedRoute){
    console.log(this.route.snapshot.params['id'])
    console.log(this.route.snapshot.queryParams['action'])
    console.log(this.route.snapshot.queryParams['referer'])
    this.id=this.route.snapshot.params['id']
    this.lugar = this.buscarLugar()
    console.log(this.buscarLugar())
  }

  buscarLugar(){
    return this.lugares.filter((lugar)=> {return lugar.id == this.id}) [0] || null
  }
}