import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class LugaresService {
  lugares:any = [
    {id:1 ,plan:'pagado',cercania: 1, distancia: 1, active: true, nombre:"Floreria la flor" , description:"Lorem ipsum dolor sit amet"},
    {id:2 ,plan:'gratuito',cercania: 2, distancia: 5, active: true, nombre:"Jugueteria el juguete" , description:"Lorem ipsum dolor sit amet"},
    {id:3 ,plan:'pagado',cercania: 2, distancia: 4, active: true, nombre:"Gomeria la goma" , description:"Lorem ipsum dolor sit amet"},
    {id:4 ,plan:'pagado',cercania: 1, distancia: 2, active: true, nombre:"Relojeria el reloj" , description:"Lorem ipsum dolor sit amet"},
    {id:5 ,plan:'gratuito',cercania: 3, distancia: 10, active: true, nombre:"Chapa y pintura la chapa" , description:"Lorem ipsum dolor sit amet"},
    {id:6 ,plan:'gratuito',cercania: 3, distancia: 20, active: true, nombre:"La oficina de globant", description:"Lorem ipsum dolor sit amet" }
  ]
  constructor (private afDB:AngularFireDatabase) {

  }
  public getLugares() {
    return this.lugares
  }
  public buscarLugar(id) {
    return this.lugares.filter((lugar)=> {return lugar.id == id}) [0] || null
  }
  public guardarLugar(lugar) {
    console.log(lugar)
    this.afDB.database.ref('lugares/1').set(lugar)
  }

}