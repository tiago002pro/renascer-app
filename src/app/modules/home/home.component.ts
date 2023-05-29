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
    this.socialMedia = SocialMediaJson
    this.renascerNews = RenascerNewsJson
    this.__getSchedule()
  }

  openLink(link: any): void {
    window.open(link, "myWindow")
  }

  goToSermon(): void {
    this.router.navigate([`/sermon/${this.videoBanner.id}`, this.videoBanner])
  }

  goTo(router: string): void {
    this.router.navigate([`/${router}`])
  }

  __getSchedule() {
    var dated = new Date();
    var weekOfMonth = (0 | dated.getDate() / 7) + 1;

    switch(weekOfMonth) {
      case 1:
        this.schedule = ScheduleJson.week_1
        break
      case 2:
        this.schedule = ScheduleJson.week_2
        break
      case 3:
        this.schedule = ScheduleJson.week_3
        break
      case 4:
        this.schedule = ScheduleJson.week_4
        break
      case 5:
        this.schedule = ScheduleJson.week_5
        break
      default:
        this.schedule = ScheduleJson.week_1
    }
  }
}
