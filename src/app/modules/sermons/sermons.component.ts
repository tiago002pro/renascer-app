import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SermonsComponent implements OnInit {
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
    {
      banner: [
        {img: 'h0OVot0SjiQ', title: 'Revolução do Amor', speaker: 'Pastor José Octávio'},
        {img: 'h0OVot0SjiQ', title: 'Revolução do Amor', speaker: 'Pastor José Octávio'},
        {img: 'h0OVot0SjiQ', title: 'Revolução do Amor', speaker: 'Pastor José Octávio'},
      ],
    }
  ]
  
  constructor(
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    // this.readyState()
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 800) {
      this.slidesPerView = 3
    } else if (window.innerWidth >= 400) {
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
}
