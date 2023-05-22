import { Component, OnInit } from '@angular/core';
import { SermonService } from '../sermons/service/sermon.service';
import { Router } from '@angular/router';
import ScheduleJson from '../../../assets/json/schedule.json';
import SocialMediaJson from '../../../assets/json/social-media.json';
import RenascerNewsJson from '../../../assets/json/renascer-news.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoBanner!: any
  schedule!: any
  socialMedia!: any
  renascerNews!:any
  ourHomeImage!: string

  constructor(
    private sermonService: SermonService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.__initializingVariables()
    this.__loadEnvironment()
  }

  __initializingVariables() {
    this.videoBanner = {}
    this.schedule = []
    this.socialMedia = []
    this.renascerNews = []
    this.ourHomeImage = 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/Home.jpg?alt=media&token=f90e08e2-33e7-44d5-9ec3-d59cebb46e0f'
  }

  __loadEnvironment() {
    this.videoBanner = this.sermonService.getMostRecent()
    this.schedule = ScheduleJson
    this.socialMedia = SocialMediaJson
    this.renascerNews = RenascerNewsJson
  }

  openLink(link: any) {
    window.open(link)
  }

  goToSermon() {
    this.router.navigate([`/sermon/${this.videoBanner.id}`, this.videoBanner])
  }

  goTo(router: string) {
    this.router.navigate([`/${router}`])
  }
}
