import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOptionsComponent } from './form-options/form-options.component';


const routes: Routes = [
//  path:''
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
