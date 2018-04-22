import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';

const routes: Routes = [
  {
    path: '',
    component: components.UserManagementComponent,
    children: [
      { path: 'details', component: components.UserDetailsComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }



