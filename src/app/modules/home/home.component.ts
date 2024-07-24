import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ScheduleJson from '../../../assets/json/schedule.json';
import SocialMediaJson from '../../../assets/json/social-media.json';
import RenascerNewsJson from '../../../assets/json/renascer-news.json';
import { VideosService } from 'src/app/pages/video/service/videos.service';
import { SermonService } from '../sermons/service/sermon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestVideos!:any[]
  videoBanner!: any
  schedule!: any
  socialMedia!: any
  renascerNews!: any
  ourHomeImage!: string

  constructor(
    private videosService:VideosService,
    private sermonService:SermonService,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.__initializingVariables()
    this.__loadEnvironment()
  }

  async __initializingVariables() {
    // this.latestVideos = await this.videosService.getLatest().toPromise().then((response:any) => response)
    this.videoBanner = this.sermonService.getMostRecent()
    this.schedule = []
    this.socialMedia = []
    this.renascerNews = []
    this.ourHomeImage = 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/Site%2FCONF-40.jpg?alt=media&token=89543b4a-c1c2-4bd6-a533-a2f1728af249'
  }

  __loadEnvironment(): void {
    this.socialMedia = SocialMediaJson
    this.renascerNews = RenascerNewsJson
    this.__getSchedule()
  }

  openLink(link: any): void {
    window.open(link, "myWindow")
  }

  goToSermon(): void {
    this.router.navigate([`/video/${this.videoBanner.id}`])
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
