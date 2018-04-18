import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as comp from './domain/components';

const routes: Routes = [
  {
    path: '',
    component: comp.HomeComponent,
    children: [
      { path: '', redirectTo: 'hello', pathMatch: 'full' },
      { path: 'hello', component: comp.HelloNgComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class HomeRoutingModule {
}
