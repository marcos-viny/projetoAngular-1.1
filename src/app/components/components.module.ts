import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    NavBarComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    MainComponent
  ]
})
export class ComponentsModule { }
