import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LernmodiModule } from './lernmodi/lernmodi.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOptionsComponent } from './form-options/form-options.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UserInterfaceComponent } from './user-interface/user-interface.component';

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
    LernmodiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
