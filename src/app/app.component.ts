import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Platzi-Squear';
  lugares:any = [
    {plan:'pagado',cercania: 1, distancia: 1, active: true, nombre:"Floreria la flor"},
    {plan:'gratuito',cercania: 2, distancia: 5, active: true, nombre:"Jugueteria el juguete"},
    {plan:'pagado',cercania: 2, distancia: 4, active: true, nombre:"Gomeria la goma"},
    {plan:'pagado',cercania: 1, distancia: 2, active: true, nombre:"Relojeria el reloj"},
    {plan:'gratuito',cercania: 3, distancia: 10, active: true, nombre:"Chapa y pintura la chapa"},
    {plan: 'gratuito',cercania: 3, distancia: 20, active: true, nombre:"La oficina de globant"},
    {plan:'pagado',cercania: 3, distancia: 40, active: true, nombre:"Y la re concha de tu vieja"},
  ];

  lat:number = -27.448712;
  lng:number = -58.996193;
  constructor () {

  }

}