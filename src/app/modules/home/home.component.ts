import { Component, OnInit } from '@angular/core';
import { SermonService } from '../sermons/service/sermon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoBanner!: any
  schedule!: any
  socialMedia!: any
  sermons!: any

  constructor(
    private sermonService: SermonService,
    private router:Router,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.__loadVideoBannner()
    this.__loadSchedule()
    this.__loadSocialMedia()
  }

  async __loadVideoBannner(){
    this.videoBanner = await this.sermonService.getMostRecent(1).toPromise().then((res: any) => res[0])
  }

  __loadSchedule() {
    this.schedule = [
      {
        dayWeek: 'Segunda',
        service: "Reunião de oração",
        time: "20:00Hs"
      },
      {
        dayWeek: 'Quarta',
        service: "Culto de celebração",
        time: "20:00Hs"
      },
      {
        dayWeek: 'Sábado',
        service: "Culto de ensino",
        time: "19:00Hs"
      },
      {
        dayWeek: 'Domingo',
        service: "Culto da Família",
        time: "19:00Hs"
      }
    ]
  }

  __loadSocialMedia() {
    this.socialMedia = [
      {img: "./../../../assets/img/social-media-icon/instagram.png", name: "Instagram", link: "https://www.instagram.com/renascermaringa/?hl=pt-br", icon: "bi bi-instagram"},
      {img: "./../../../assets/img/social-media-icon/facebook.png", name: "Facebook", link: "https://www.facebook.com/igrejarenascermaringa", icon: "bi bi-facebook"},
      {img: "./../../../assets/img/social-media-icon/twitter.png", name: "Twitter", link: "https://twitter.com/renascermaringa", icon: "bi bi-twitter"},
      {img: "./../../../assets/img/social-media-icon/youtube.png", name: "YouTube", link: "https://www.youtube.com/c/RenascerMaring%C3%A1", icon: "bi bi-youtube"},
      {img: "./../../../assets/img/social-media-icon/whatsapp.png", name: "WhatsApp", link: "http://api.whatsapp.com/send?1=pt_BR&phone=554430302570", icon: "bi bi-whatsapp"},
    ]
  }

  openLink(link: any) {
    window.open(link)
  }

  openVideo(id:number):void {
    this.router.navigate([`/sermon/${id}`])
  }

  goToSermon() {
    this.router.navigate([`/sermon/${this.videoBanner.id}`])
  }

  goToSermons() {
    this.router.navigate([`/sermons`])
  }
}
