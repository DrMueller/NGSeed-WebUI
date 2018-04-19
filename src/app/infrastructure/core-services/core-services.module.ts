import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AdalInterceptor } from 'adal-angular4';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { EnumService } from './enums';
import { EnvironmentService } from './environment';
import { EventDispatcherService } from './event-dispatching';
import * as http from './http';
import { AdalInterceptorProxyService } from './http/services/adal-interceptor-proxy.service';
import { ObjectFactoryService } from './object-creation';
import { ToastConfigurationService, ToastService } from './toast/services';

@NgModule({
  imports: [
    CommonModule,
    ToastModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    EnvironmentService,
    ToastService,
    ToastConfigurationService,
    EventDispatcherService,
    http.CoreHttpService,
    ObjectFactoryService,
    EnumService,
    AdalInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdalInterceptorProxyService,
      multi: true,
    }
  ]
})
export class CoreServicesModule { }
