import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// app
import * as components from './components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    components.HelloNgComponent,
    components.HomeComponent
  ]
})
export class HomeModule { }
