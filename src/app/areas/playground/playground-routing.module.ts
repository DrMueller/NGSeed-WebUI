import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';

import { BreadcrumbRouteConfig } from 'app/infrastructure/aspects/breadcrumbs';

const routes: Routes = [
  {
    path: '',
    component: components.PlaygroundComponent,
    children: [
      {
        path: '', redirectTo: 'overview', pathMatch: 'full'
      },
      {
        path: 'overview', component: components.PlaygroundOverviewComponent
      },
      {
        path: 'cc', component: components.PlaygroundCollapsibleCardComponent
      },
      { path: 'select', component: components.PlaygroundSelectComponent },
      { path: 'enum-select', component: components.PlaygroundEnumSelectComponent },
      { path: 'primeng-editor', component: components.PlaygroundPrimengEditorComponent },
      { path: 'rx-validation', component: components.PlaygroundRxFormComponent },
      { path: 'rx-fc', component: components.PlaygroundRxFormControlWithValidationComponent },
      { path: 'error', component: components.PlaygroundErrorComponent },
      { path: 'server-get', component: components.PlaygroundServerGetComponent },
      { path: 'server-post', component: components.PlaygroundServerPostComponent },
      { path: 'comp-com-parent-child', component: components.PgOrgMainComponent },
      { path: 'reflect', component: components.PlaygroundReflectComponent },
      { path: 'grid-builder', component: components.PlaygroundGridBuilderComponent },
      {
        path: 'security',
        children: [
          { path: 'adusers', component: components.PlaygroundSecurityAdusersComponent },
          { path: 'policies', component: components.PlaygroundSecurityPoliciesComponent },
        ]
      },
      {
        path: 'bcs',
        component: components.PlaygroundBreadcrumbsComponent,
        data: {
          breadcrumbConfig: new BreadcrumbRouteConfig('Breadcrumbs')
        },
        children: [
          {
            path: 'bc1',
            component: components.PlaygroundBreadcrumb1Component,
            data: {
              breadcrumbConfig: new BreadcrumbRouteConfig('Breadcrumb 1')
            },
            children: [
              {
                path: 'bc2',
                component: components.PlaygroundBreadcrumb2Component,
                children: [
                  {
                    path: 'bc3',
                    component: components.PlaygroundBreadcrumb3Component,
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



