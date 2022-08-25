import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { DepartmentComponent } from './department/department.component';
import { VisionComponent } from './vision/vision.component';

@NgModule({
  declarations: [
    AboutComponent,
    LeadershipComponent,
    DepartmentComponent,
    VisionComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AboutModule { }
