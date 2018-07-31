import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AgmCoreModule } from '@agm/core'
import { ResaltarDirective } from "./directives/resaltar.directive"
import { ContarClicksDirective } from "./directives/contar-clicks.directive"
import { Routes, RouterModule } from "@angular/router"
import { DetalleComponent } from './detalle/detalle.component'
import { LugaresComponent } from './lugares/lugares.component'

const appRoutes: Routes= [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAURlDHbpPGrbw43f4BO26ACoCBUryV4B8'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
