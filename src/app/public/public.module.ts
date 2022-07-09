import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PublicComponent } from './public.component';


@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
