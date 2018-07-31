import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AgmCoreModule } from '@agm/core'
import { ResaltarDirective } from "./directives/resaltar.directive"
import { ContarClicksDirective } from "./directives/contar-clicks.directive"
import { Routes, RouterModule } from "@angular/router"
import { DetalleComponent } from './detalle/detalle.component'
import { LugaresComponent } from './lugares/lugares.component'
import { ContactoComponent } from './contacto/contacto.component'
import { LugaresService } from './services/lugares.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes= [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'detalle/:id', component: DetalleComponent}
]

export const firebaseConfig = {
  apiKey: "AIzaSyCqeUChvHUkstFXzhgABfG6PAYMMXpa61w",
  authDomain: "acme-f320f.firebaseapp.com",
  databaseURL: "https://acme-f320f.firebaseio.com",
  storageBucket: "acme-f320f.appspot.com",
  messagingSenderId: '331454250505'
}

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
    
  ],
  imports: [
BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAURlDHbpPGrbw43f4BO26ACoCBUryV4B8'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
