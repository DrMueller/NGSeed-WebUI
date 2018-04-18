import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// app
import * as comp from './domain/components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    comp.HelloNgComponent,
    comp.HomeComponent
  ]
})
export class HomeModule { }
