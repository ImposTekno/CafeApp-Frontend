import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Angular material modules

import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
