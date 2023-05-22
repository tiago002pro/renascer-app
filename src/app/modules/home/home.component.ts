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
  renascerNews!: any
  ourHomeImage!: string

  constructor(
    private sermonService: SermonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.__initializingVariables()
    this.__loadEnvironment()
  }

  __initializingVariables(): void {
    this.videoBanner = {}
    this.schedule = []
    this.socialMedia = []
    this.renascerNews = []
    this.ourHomeImage = 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-header.jpg?alt=media&token=b6ff3b36-2034-4e21-af78-c227ca2a4380'
  }

  __loadEnvironment(): void {
    this.videoBanner = this.sermonService.getMostRecent()
    this.schedule = ScheduleJson
    this.socialMedia = SocialMediaJson
    this.renascerNews = RenascerNewsJson
  }

  openLink(link: any): void {
    window.open(link)
  }

  goToSermon(): void {
    this.router.navigate([`/sermon/${this.videoBanner.id}`, this.videoBanner])
  }

  goTo(router: string): void {
    this.router.navigate([`/${router}`])
  }
}
