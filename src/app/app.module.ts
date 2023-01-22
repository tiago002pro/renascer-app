import { DepartmentComponent } from './modules/department/department.component';
import { LeadershipComponent } from './modules/leadership/leadership.component';
import { AboutComponent } from './modules/about/about.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhereAreWeComponent } from './modules/where-are-we/where-are-we.component';
import { ScrollDirective } from './components/navbar/directive/scroll.directive';
import { SermonsComponent } from './modules/sermons/sermons.component';
import { SwiperModule } from 'swiper/angular';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ComponentsModule } from './modules/components/components.module';
import { ContactComponent } from './modules/contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

const ngxUiLoaderConfig: NgxUiLoaderConfig =
{
  "bgsColor": "#ff9700",
  "bgsOpacity": 0.5,
  "bgsPosition": "center-center",
  "bgsSize": 60,
  "bgsType": "chasing-dots",
  "blur": 11,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#ff9700",
  "fgsPosition": "center-center",
  "fgsSize": 130,
  "fgsType": "double-bounce",
  "gap": 10,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgb(255,255,255)",
  "pbColor": "#ff9700",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WhereAreWeComponent,
    ScrollDirective,
    SermonsComponent,
    AboutComponent,
    LeadershipComponent,
    DepartmentComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), 
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    SwiperModule,
    ComponentsModule,
    RouterModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
