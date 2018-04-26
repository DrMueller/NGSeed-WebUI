import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as comp from './domain/components';

import { BreadcrumbRouteConfig } from 'app/infrastructure/aspects/breadcrumbs';

const routes: Routes = [
  {
    path: '',
    component: comp.PlaygroundComponent,
    children: [
      {
        path: '', redirectTo: 'overview', pathMatch: 'full'
      },
      {
        path: 'overview', component: comp.PlaygroundOverviewComponent
      },
      {
        path: 'cc', component: comp.PlaygroundCollapsibleCardComponent
      },
      { path: 'select', component: comp.PlaygroundSelectComponent },
      { path: 'enum-select', component: comp.PlaygroundEnumSelectComponent },
      { path: 'primeng-editor', component: comp.PlaygroundPrimengEditorComponent },
      { path: 'rx-validation', component: comp.PlaygroundRxFormComponent },
      { path: 'rx-fc', component: comp.PlaygroundRxFormControlWithValidationComponent },
      { path: 'error', component: comp.PlaygroundErrorComponent },
      { path: 'server-get', component: comp.PlaygroundServerGetComponent },
      { path: 'server-post', component: comp.PlaygroundServerPostComponent },
      { path: 'comp-com-parent-child', component: comp.PgOrgMainComponent },
      { path: 'reflect', component: comp.PlaygroundReflectComponent },
      { path: 'grid-builder', component: comp.PlaygroundGridBuilderComponent },
      {
        path: 'security',
        children: [
          { path: 'adusers', component: comp.PlaygroundSecurityAdusersComponent },
          { path: 'policies', component: comp.PlaygroundSecurityPoliciesComponent },
        ]
      },
      {
        path: 'bcs',
        component: comp.PlaygroundBreadcrumbsComponent,
        data: {
          breadcrumbConfig: new BreadcrumbRouteConfig('Breadcrumbs')
        },
        children: [
          {
            path: 'bc1',
            component: comp.PlaygroundBreadcrumb1Component,
            data: {
              breadcrumbConfig: new BreadcrumbRouteConfig('Breadcrumb 1')
            },
            children: [
              {
                path: 'bc2',
                component: comp.PlaygroundBreadcrumb2Component,
                children: [
                  {
                    path: 'bc3',
                    component: comp.PlaygroundBreadcrumb3Component,
                    data: {
                      breadcrumbConfig: new BreadcrumbRouteConfig('Breadcrumb 3')
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }



