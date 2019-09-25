import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LernmodiRoutingModule } from './lernmodi-routing.module';

import { ModusLernenComponent } from './modus-lernen/modus-lernen.component';
import { ModusTeilPruefComponent } from './modus-teil-pruef/modus-teil-pruef.component';
import { ModusVollPruefComponent } from './modus-voll-pruef/modus-voll-pruef.component';
import { AuswertungComponent } from './auswertung/auswertung.component';


@NgModule({
  declarations: [
    ModusLernenComponent,
    ModusTeilPruefComponent,
    ModusVollPruefComponent,
    AuswertungComponent,
  ],
  imports: [
    CommonModule,
    LernmodiRoutingModule
  ]
})
export class LernmodiModule { }
