import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Platzi-Squear';
  lugares:any = [
    {active: true, nombre: "floreria la flor"},
    {active: true, nombre: "Jugueteria el juguete"},
    {active: false, nombre: "Zapateria el zapato"},
    {active: true, nombre: "Gomeria la goma"},
    {active: true, nombre: "floreria la flor"},
    {active: true, nombre: "Jugueteria el juguete"},
    {active: true, nombre: "Zapateria el zapato"},
    {active: true, nombre: "Gomeria la goma"}
  ];
  lat:number = -27.448712;
  lng:number = -58.996193;
  constructor () {
  }


}
