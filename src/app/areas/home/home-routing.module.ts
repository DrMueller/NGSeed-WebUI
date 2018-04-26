import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';

const routes: Routes = [
  {
    path: '',
    component: components.HomeComponent,
    children: [
      { path: '', redirectTo: 'hello', pathMatch: 'full' },
      { path: 'hello', component: components.HelloNgComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class HomeRoutingModule {
}
