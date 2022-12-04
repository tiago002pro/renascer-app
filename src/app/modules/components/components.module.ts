import { TitleModuleComponent } from './title-module/title-module.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TitleModuleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TitleModuleComponent,
  ]
})
export class ComponentsModule { }
