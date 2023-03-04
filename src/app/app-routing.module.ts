import { ContactComponent } from './modules/contact/contact.component';
import { LeadershipComponent } from './modules/leadership/leadership.component';
import { DepartmentComponent } from './modules/department/department.component';
import { SermonsComponent } from './modules/sermons/sermons/sermons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { WhereAreWeComponent } from './modules/where-are-we/where-are-we.component';
import { AllSermonsComponent } from './modules/sermons/all-sermons/all-sermons.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'where-we-are', component: WhereAreWeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: 'sermons', component: SermonsComponent },
  { path: 'all-sermons', component: AllSermonsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
