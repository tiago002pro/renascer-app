import { SermonsComponent } from './modules/sermons/sermons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { DepartmentComponent } from './modules/about/department/department.component';
import { LeadershipComponent } from './modules/about/leadership/leadership.component';
import { VisionComponent } from './modules/about/vision/vision.component';
import { HomeComponent } from './modules/home/home.component';
import { WhereAreWeComponent } from './modules/where-are-we/where-are-we.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'where-we-are', 
    component: WhereAreWeComponent
  },
  { 
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'about', 
    children: [
      { 
        path: 'beliefs', 
        component: VisionComponent
      },
      { 
        path: 'departments', 
        component: DepartmentComponent
      },
      { 
        path: 'leadership', 
        component: LeadershipComponent
      },
    ]
  },
  {
    path: 'sermons',
    component: SermonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Array = [DepartmentComponent, LeadershipComponent, VisionComponent]
