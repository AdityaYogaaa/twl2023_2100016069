import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { ProductInputComponent } from './page-content/product/input/product-input.component';
import { ProductListComponent } from './page-content/product/list/product-list.component';

import { CommonModule, NgFor, NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material import
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

// pipe import
import { RupiahPipe } from './page-content/product/rupiah.pipe';
import { NumberPipe } from './page-content/product/number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RupiahPipe,
    NumberPipe,
    SidenavComponent,
    ProductInputComponent,
    ProductListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
