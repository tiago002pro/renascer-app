import { Component, OnInit } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import AboutCarouselImages from '../../../assets/json/about-carousel-img.json';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imgTitle =  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-header.jpg?alt=media&token=b6ff3b36-2034-4e21-af78-c227ca2a4380'
  images!: any
  introduction!: string[]
  values!: any
  thumbsSwiper!: any
  pastoresImg!: any
  
  constructor() {}
  
  ngOnInit(): void {
    this.images = AboutCarouselImages.slide
    this.introduction = AboutCarouselImages.introduction.paragraphs
    this.values = AboutCarouselImages.introduction['values ']
    this.pastoresImg = 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/Pastores%20seniores.jpg?alt=media&token=d975a047-948e-4bf9-96f3-9f036f2a0ebe'
  }
}
