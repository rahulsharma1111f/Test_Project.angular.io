import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullDataComponent } from './full-data/full-data.component';

const routes: Routes = [
  {
    path: 'full-data',
    component: FullDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
