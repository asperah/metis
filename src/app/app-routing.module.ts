import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FormOptionsComponent } from './form-options/form-options.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form-options',
    pathMatch: 'full'
  },
  {
    path: 'form-options',
    component: FormOptionsComponent
  },
  {
    path:'lernmodi', 
    loadChildren: './lernmodi/lernmodi.module#LernmodiModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
