import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AdalInterceptor } from 'adal-angular4';

import { ToastrModule } from 'ngx-toastr';
import { EnumService } from './enums';
import { EnvironmentService } from './environment';
import { EventDispatcherService } from './event-dispatching';
import * as http from './http';
import { AdalInterceptorProxyService } from './http/services/adal-interceptor-proxy.service';
import { ObjectFactoryService } from './object-creation';
import { ToastService } from './toast/services';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    EnvironmentService,
    ToastService,
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
