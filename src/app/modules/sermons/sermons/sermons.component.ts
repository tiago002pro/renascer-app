import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Navigation, SwiperOptions } from "swiper";
import { SermonService } from '../service/sermon.service';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SermonsComponent implements OnInit {
  configPopularSermons!: SwiperOptions
  popularSermons!: any;
  configRecentSermons!: SwiperOptions
  recentSermons!: any
  
  constructor(
    private sermonService: SermonService,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.__loadPopularSermons()
    this.__loadRecentSermons()
    this.__loadConfigPopularSermons()
    this.__loadConfigRecentSermons()
  }

  async __loadPopularSermons() {
    this.popularSermons = await this.sermonService.getAll().toPromise().then((res) => res )
    
  }
  
  __loadRecentSermons() {
    this.recentSermons = this.popularSermons
  }

  __loadConfigPopularSermons() {
    this.configPopularSermons = {
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      loop: false,
    }
  }

  __loadConfigRecentSermons() {
    this.configRecentSermons = {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      grid: {
        rows: 2
      }
    }
  }

  openVideo(id: string) {
    window.open(`id`, "_blank");
  }

  onSwiper(swiper: any) {
    // console.log(swiper);
  }
  
  onSlideChange() {
    // console.log('slide change');
  }
}
