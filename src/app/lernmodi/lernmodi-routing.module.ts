import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModusLernenComponent } from './modus-lernen/modus-lernen.component';
import { ModusTeilPruefComponent } from './modus-teil-pruef/modus-teil-pruef.component';
import { ModusVollPruefComponent } from './modus-voll-pruef/modus-voll-pruef.component';
import { AuswertungComponent } from './auswertung/auswertung.component';

const routes: Routes = [
  {
    path:'modus-lernen', 
    component: ModusLernenComponent
  },
  {
    path:'modus-teil-pruef', 
    component: ModusTeilPruefComponent
  },
  {
    path:'modus-voll-pruef', 
    component: ModusVollPruefComponent
  },
  {
    path:'auswertung', 
    component: AuswertungComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LernmodiRoutingModule { }
