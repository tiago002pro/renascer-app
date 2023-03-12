import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Navigation, SwiperOptions } from "swiper";
import { Sermon, LinkSermons } from '../assets/interface/link-sermons';

import recentSermonsData from '../assets/json/recent-sermons.json';
import popularSermonsData from '../assets/json/popular-sermons.json';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SermonsComponent implements OnInit {
  imgTitle!: string
  configPopularSermons!: SwiperOptions
  popularSermonsSidesPerView!: number
  popularSermons: Array<Sermon> | undefined
  configRecentSermons!: SwiperOptions
  recentSermonsSlidesPerView!: number
  recentSermons: Array<LinkSermons> | undefined
  
  constructor() {
    this.imgTitle = '../../../../assets/img/module-sermons.jpg'
    // this.popularSermons = popularSermonsData
    // this.recentSermons = recentSermonsData
  }

  ngOnInit(): void {
    this.__onResize()
    this.__loadConfigPopularSermons()
    this.__loadConfigRecentSermons()
  }

  @HostListener('window:resize', ['$event'])
  __onResize() {
    if  (window.innerWidth >= 900) {
      this.popularSermonsSidesPerView = 3
      this.recentSermonsSlidesPerView = 3
    } else if (window.innerWidth <= 767) {
      this.popularSermonsSidesPerView = 2
      this.recentSermonsSlidesPerView = 1
    } else {
      this.popularSermonsSidesPerView = 2
      this.recentSermonsSlidesPerView = 2
    }
  }

  __loadConfigPopularSermons() {
    this.configPopularSermons = {
      slidesPerView: this.popularSermonsSidesPerView,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      loop: true,
      observer: false,
      
    }
  }

  __loadConfigRecentSermons() {
    this.configRecentSermons = {
      slidesPerView: this.recentSermonsSlidesPerView,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
    }
  }

  openVideo(id: string) {
    window.open(`http://www.youtube.com/watch?v=${id}`, "_blank");
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  
  onSlideChange() {
    console.log('slide change');
  }
}
