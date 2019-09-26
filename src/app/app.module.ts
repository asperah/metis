import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOptionsComponent } from './form-options/form-options.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UserInterfaceComponent } from './user-interface/user-interface.component';

import { LernmodiModule } from './lernmodi/lernmodi.module';

@NgModule({
  declarations: [
    AppComponent,
    FormOptionsComponent,
    UserInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LernmodiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
