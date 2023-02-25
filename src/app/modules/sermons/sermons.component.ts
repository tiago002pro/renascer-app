import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import SwiperCore, { Pagination, Navigation, SwiperOptions } from "swiper";
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SermonsComponent implements OnInit {
  imgTitle =  './../../../assets/img/module-sermons.jpg'
  slidesPerView!: number
  carouselVideos = [
    {
      banner: [
        {img: '4ubCnaWZSxo', title: 'Por Jesus Vale a Pena', speaker: 'Pastora Eunice Lea'},
        {img: '4ubCnaWZSxo', title: 'Por Jesus Vale a Pena', speaker: 'Pastora Eunice Lea'},
        {img: '4ubCnaWZSxo', title: 'Por Jesus Vale a Pena', speaker: 'Pastora Eunice Lea'},
      ],
    },
    {
      banner: [
        {img: 'W_Cvb6_kjfo', title: 'Revolução do Amor', speaker: 'João Pedro'},
        {img: 'W_Cvb6_kjfo', title: 'Revolução do Amor', speaker: 'João Pedro'},
        {img: 'W_Cvb6_kjfo', title: 'Revolução do Amor', speaker: 'João Pedro'},
      ],
    },
    {
      banner: [
        {img: '1x41JwdLI4s', title: 'Lugar de Proteção', speaker: 'Pastor Marcio Ribeiro'},
        {img: '1x41JwdLI4s', title: 'Lugar de Proteção', speaker: 'Pastor Marcio Ribeiro'},
        {img: '1x41JwdLI4s', title: 'Lugar de Proteção', speaker: 'Pastor Marcio Ribeiro'},
      ],
    },
    // {
    //   banner: [
    //     {img: 'h0OVot0SjiQ', title: 'Revolução do Amor', speaker: 'Pastor José Octávio'},
    //     {img: 'h0OVot0SjiQ', title: 'Revolução do Amor', speaker: 'Pastor José Octávio'},
    //     {img: 'h0OVot0SjiQ', title: 'Revolução do Amor', speaker: 'Pastor José Octávio'},
    //   ],
    // }
  ]

  config!: SwiperOptions
  slides!: Array<any>
  
  constructor(
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    // this.readyState()
    this.onResize()
    this.__loadOwlCarousel()
    this.__loadSlidesCousel()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 700) {
      this.slidesPerView = 3
    } else if (window.innerWidth > 500) {
      this.slidesPerView = 2
    } else {
      this.slidesPerView = 1
    }
  }

  readyState() {
    do {
      this.ngxService.start()
    } while (document.readyState == "complete")
    this.ngxService.stop()
  }

  __loadOwlCarousel() {
    this.config = {
      slidesPerView: this.slidesPerView,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
    }
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  __loadSlidesCousel() {
    this.slides = [
      {id: 1, img: '4ubCnaWZSxo', title: 'Por Jesus Vale a Pena', speaker: 'Pastora Eunice Lea'},
      {id: 2, img: 'W_Cvb6_kjfo', title: 'Por Jesus Vale a Pena', speaker: 'Pastora Eunice Lea'},
      {id: 3, img: '1x41JwdLI4s', title: 'Por Jesus Vale a Pena', speaker: 'Pastora Eunice Lea'},
    ]
  }
}
