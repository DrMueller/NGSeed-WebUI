import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthorizationGuard } from 'app/infrastructure/aspects/security';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'app/areas/home/home.module#HomeModule'
  },
  {
    path: 'playground',
    loadChildren: 'app/areas/playground/playground.module#PlaygroundModule',
    canActivate: [AuthorizationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {
}
