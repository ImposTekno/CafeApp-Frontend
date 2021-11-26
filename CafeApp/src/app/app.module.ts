import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Angular material modules

import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormLogInComponent } from './form-log-in/form-log-in.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent,
    AddProductFormComponent,
    FormLogInComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
