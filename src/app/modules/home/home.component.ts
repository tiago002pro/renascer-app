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
  news!:any

  constructor(
    private sermonService: SermonService,
    private router:Router,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.__loadVideoBannner()
    this.__loadSchedule()
    this.__loadSocialMedia()

    this.news = [
      {id: 1, title: "Servir a Igreja", image: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/101721_DIGITAL_ASSETS_00_MasterBranding_02_DCEN_DigitalCentral_001_Archive_GodsUpToSomethingUpstreamec-egroups-curriculu.webp?alt=media&token=83bcf8b5-2b6c-4917-a21c-ec7e35c0fb7a"},
      {id: 2, title: "Intensivo de Liderança - THEGOODVILAGES",  image: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/il_794xN.4539599214_gc0l.webp?alt=media&token=59358f85-a9c0-436a-9344-d8e6497fcdfa"},
      {id: 3, title: "Escola de Evangelismo - Maranhão",  image: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/Captura%20de%20tela_20230204_144014.png?alt=media&token=21a7489d-534f-4e63-9439-3517d06429b7"},
      {id: 3, title: "Escola de Evangelismo - Maranhão",  image: "https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/Captura%20de%20tela_20230204_144014.png?alt=media&token=21a7489d-534f-4e63-9439-3517d06429b7"},
      // {id: 4, title: "Escola de Evangelismo - Maranhão"},
      // {id: 5, title: "Escola de Evangelismo - Maranhão"},
    ]
  }

  async __loadVideoBannner(){
    this.videoBanner = await this.sermonService.getMostRecent()
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
    this.router.navigate([`/sermon/${this.videoBanner.id}`, this.videoBanner])
  }

  goToSermons() {
    this.router.navigate([`/all-sermons`])
  }
}
