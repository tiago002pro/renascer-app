import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from "swiper";
import { SermonService } from '../service/sermon.service';

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
      // {
      //   sermons: [
      //     this.popularSermons[12],
      //     this.popularSermons[13],
      //     this.popularSermons[14]
      //   ]
      // },
      // {
      //   sermons: [
      //     this.popularSermons[15],
      //     this.popularSermons[16],
      //     this.popularSermons[17]
      //   ]
      // },
      // {
      //   sermons: [
      //     this.popularSermons[18],
      //     this.popularSermons[19],
      //     this.popularSermons[20]
      //   ]
      // },
      // {
      //   sermons: [
      //     this.popularSermons[21],
      //     this.popularSermons[22],
      //     this.popularSermons[23]
      //   ]
      // },
      // {
      //   sermons: [
      //     this.popularSermons[24],
      //     this.popularSermons[25],
      //     this.popularSermons[26]
      //   ]
      // }
    ]
  }

  __loadConfigPopularSermons() {
    this.configPopularSermons = {
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      loop: true,
    }
  }

  __loadConfigRecentSermons() {
    this.configRecentSermons = {
      slidesPerView: 3,
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
