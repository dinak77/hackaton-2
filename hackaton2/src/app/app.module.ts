import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormDataComponent } from './form-data/form-data.component';

import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,

    FormDataComponent

    MapComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
