import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewEquipoComponent } from './new-equipo/new-equipo.component';

const routes: Routes = [
  {
    path: 'edit/:id',  component:NewEquipoComponent
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
