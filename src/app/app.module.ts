import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAURlDHbpPGrbw43f4BO26ACoCBUryV4B8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
