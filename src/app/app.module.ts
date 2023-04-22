import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ScrollDirective } from './components/navbar/directive/scroll.directive';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhereAreWeComponent } from './modules/where-are-we/where-are-we.component';
import { SermonsComponent } from './modules/sermons/sermons/sermons.component';
import { AboutComponent } from './modules/about/about.component';
import { LeadershipComponent } from './modules/leadership/leadership.component';
import { DepartmentComponent } from './modules/department/department.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AllSermonsComponent } from './modules/sermons/all-sermons/all-sermons.component';
import { WatchSermonComponent } from './modules/sermons/watch-sermon/watch-sermon.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { provideAuth, getAuth } from '@angular/fire/auth'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { provideFunctions, getFunctions } from '@angular/fire/functions'
import { provideStorage, getStorage } from '@angular/fire/storage'
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ComponentsModule } from './modules/components/components.module';
import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import moment from 'moment';
moment.locale('pt-br')

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
    ScrollDirective,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WhereAreWeComponent,
    SermonsComponent,
    AboutComponent,
    LeadershipComponent,
    DepartmentComponent,
    ContactComponent,
    AllSermonsComponent,
    WatchSermonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), 
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    ComponentsModule,
    SwiperModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
