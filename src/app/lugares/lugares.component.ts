import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['lugares.component.css']
})

export class LugaresComponent {
  title = 'Platzi-Squear';
  lugares:any = [
    {id:1 ,plan:'pagado',cercania: 1, distancia: 1, active: true, nombre:"Floreria la flor"},
    {id:2 ,plan:'gratuito',cercania: 2, distancia: 5, active: true, nombre:"Jugueteria el juguete"},
    {id:3 ,plan:'pagado',cercania: 2, distancia: 4, active: true, nombre:"Gomeria la goma"},
    {id:4 ,plan:'pagado',cercania: 1, distancia: 2, active: true, nombre:"Relojeria el reloj"},
    {id:5 ,plan:'gratuito',cercania: 3, distancia: 10, active: true, nombre:"Chapa y pintura la chapa"},
    {id:6 ,plan: 'gratuito',cercania: 3, distancia: 20, active: true, nombre:"La oficina de globant"}
  ];

  lat:number = -27.448712;
  lng:number = -58.996193;

}