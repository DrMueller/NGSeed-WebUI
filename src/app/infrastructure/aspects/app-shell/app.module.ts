import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SecurityModule } from 'app/infrastructure/aspects/security';
import { CoreServicesModule } from 'app/infrastructure/core-services';
import { AgGridBuildingModule } from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';
import { RxFormsModule } from 'app/infrastructure/shared-features/rx-forms';
import { UserManagementModule } from 'app/infrastructure/shared-features/user-management';

import { AppNavigationModule } from '../app-navigation';
import { ErrorModule } from '../error';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BreadcrumbsModule } from '../breadcrumbs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    SecurityModule.forRoot(),
    AppRoutingModule,
    CoreServicesModule,
    RxFormsModule.forRoot(),
    AppNavigationModule,
    ErrorModule.forRoot(),
    AgGridBuildingModule.forRoot(),
    UserManagementModule.forRoot(),
    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
