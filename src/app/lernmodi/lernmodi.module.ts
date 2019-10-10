import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LernmodiRoutingModule } from './lernmodi-routing.module';

import { ModusLernenComponent } from './modus-lernen/modus-lernen.component';
import { ModusTeilPruefComponent } from './modus-teil-pruef/modus-teil-pruef.component';
import { ModusVollPruefComponent } from './modus-voll-pruef/modus-voll-pruef.component';
import { AuswertungComponent } from './auswertung/auswertung.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { DelayDirective } from './shared/delay.directive';



@NgModule({
  declarations: [
    ModusLernenComponent,
    ModusTeilPruefComponent,
    ModusVollPruefComponent,
    AuswertungComponent,
    DelayDirective,
 
  ],
  imports: [
    CommonModule,
    LernmodiRoutingModule,
    FilterPipeModule,
    ReactiveFormsModule
  ]
})
export class LernmodiModule { }
