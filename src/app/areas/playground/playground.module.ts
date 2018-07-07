import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular/main';
import { EditorModule, SharedModule, BreadcrumbModule } from 'primeng/primeng';

import { SecurityModule } from 'app/infrastructure/aspects/security';
import { BusyIndicatorModule } from 'app/infrastructure/directives/busy-indicator';
import { RxFormsModule } from 'app/infrastructure/shared-features/rx-forms';
import { BusyIndicatorButtonModule } from 'app/infrastructure/widgets/busy-indicator-button';
import { CollapsibleCardModule } from 'app/infrastructure/widgets/collapsible-card';
import { SelectModule } from 'app/infrastructure/widgets/select';

import * as components from './components';
import * as services from './services';
import { PlaygroundRoutingModule } from './playground-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    CollapsibleCardModule,
    BreadcrumbModule,
    SelectModule,
    EditorModule,
    SharedModule,
    RxFormsModule,
    AgGridModule.withComponents([
      components.PlaygroundGridBuilderComponent
    ]),
    SecurityModule,
    BusyIndicatorModule,
    BusyIndicatorButtonModule
  ],
  declarations: [
    components.PlaygroundComponent,
    components.PlaygroundOverviewComponent,
    components.PlaygroundCollapsibleCardComponent,
    components.PlaygroundSelectComponent,
    components.PlaygroundPrimengEditorComponent,
    components.PlaygroundRxFormComponent,
    components.PlaygroundEnumSelectComponent,
    components.PlaygroundErrorComponent,
    components.PlaygroundRxFormControlWithValidationComponent,
    components.PlaygroundServerGetComponent,
    components.PlaygroundServerPostComponent,
    components.PgOrgMainComponent,
    components.PgOrgAddressComponent,
    components.PgOrgHqComponent,
    components.PgOrgAddressComponent,
    components.PlaygroundReflectComponent,
    components.PlaygroundGridBuilderComponent,
    components.PlaygroundSecurityAdusersComponent,
    components.PlaygroundSecurityPoliciesComponent,
    components.PlaygroundBreadcrumb1Component,
    components.PlaygroundBreadcrumb2Component,
    components.PlaygroundBreadcrumb3Component,
    components.PlaygroundBreadcrumbsComponent,
    components.PlaygroundDirectivesComponent,
    components.PlaygroundToastComponent
  ],
  providers: [
    services.PlaygroundIndividualService
  ]
})
export class PlaygroundModule { }
