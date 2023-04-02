import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions } from "swiper";
import { Sermon } from '../assets/interface/link-sermons';
import { SermonService } from '../service/sermon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { newSermponContent } from '../modals/new-sermon-modal/new-sermon-modal';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SermonsComponent implements OnInit {
  configPopularSermons!:SwiperOptions
  configRecentSermons!:SwiperOptions
  videoBanner!:any
  popularSermons!:any;
  recentSermons!:any
  code!: string
  
  constructor(
    private router:Router,
    private sermonService:SermonService,
    private modal: NgbModal,
  ) {}

  async ngOnInit():Promise<void> {
    this.__initializingVariables()
    await this.__loadPopularSermons()
    this.__getVideoBanner()
    this.__loadRecentSermons()
  }

  __initializingVariables():void {
    this.__loadVideoBanner()
    this.__loadConfigPopularSermons()
    this.__loadConfigRecentSermons()
    this.code = ''
  }

  __loadVideoBanner():void {
    this.videoBanner = {
      id: null,
      url: null,
      img: null,
      title: null, 
      speaker: null,
      description: null,
      date: null,
    }
  }

  __loadConfigPopularSermons():void {
    this.configPopularSermons = {
      slidesPerView: 2,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      breakpoints: {
        1000: { slidesPerView: 3 }
      }
    }
  }

  __loadConfigRecentSermons():void {
    this.configRecentSermons = {
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      breakpoints: {
        800: { slidesPerView: 2 },
        1000: { slidesPerView: 3 }
      }
    }
  }

  __getVideoBanner():void {
    this.videoBanner = this.popularSermons[1]
  }

  async __loadPopularSermons():Promise<void> {
    this.popularSermons = await this.sermonService.getAll().toPromise().then((res) => res)
  }
  
  __loadRecentSermons():void {
    this.recentSermons = [
      {
        sermons: [
          this.popularSermons[0],
          this.popularSermons[1],
          this.popularSermons[2]
        ]
      },
      {
        sermons: [
          this.popularSermons[3],
          this.popularSermons[4],
          this.popularSermons[5]
        ]
      },
      {
        sermons: [
          this.popularSermons[6],
          this.popularSermons[7],
          this.popularSermons[8]
        ]
      },
      {
        sermons: [
          this.popularSermons[9],
          this.popularSermons[10],
          this.popularSermons[11]
        ]
      },
    ]
  }

  openVideo(id:number):void {
    this.router.navigate([`/sermon/${id}`])
  }

  @HostListener('document:keydown', ['$event'])
  testeTecla(event: KeyboardEvent) {
    this.code = this.code + event.key

    if (this.code == "novovideo") {
      this.modal.open(newSermponContent)
    }
  }
}
