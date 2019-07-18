import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SecondComponent } from './components/second/second.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule, MatTableModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AgmCoreModule } from '@agm/core';
import { Tab1Component } from './components/second/tab1/tab1.component';
import { Tab2Component } from './components/second/tab2/tab2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatTabsModule,
  MatPaginatorModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SecondComponent,
    Tab1Component,
    Tab2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZhnBA7u72FDVW5S21_NwcaSdVum32ego'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
