import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { ParallaxDirective } from './parallax/parallax.directive';



@NgModule({
  declarations: [
    NavBarComponent,
    MainComponent,
    ParallaxComponent,
    ParallaxDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    MainComponent,
    ParallaxComponent,
  ]
})
export class ComponentsModule { }
