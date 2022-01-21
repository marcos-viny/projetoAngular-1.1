import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { SitesComponent } from './sites.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponent } from './home/home.component';
import { ParallaxDirective } from './home/parallax.directive';


@NgModule({
  declarations: [
    SitesComponent,
    HomeComponent,
    ParallaxDirective
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
    ComponentsModule
  ]
})
export class SitesModule { }
