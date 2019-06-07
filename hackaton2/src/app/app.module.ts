import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { FormDataComponent } from './form-data/form-data.component';


import { ComparatorComponent } from './comparator/comparator.component';

import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,


    FormDataComponent


    ComparatorComponent

    MapComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
