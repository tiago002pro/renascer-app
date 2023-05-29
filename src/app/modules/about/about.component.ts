import { Component, OnInit } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import AboutData from '../../../assets/json/about-data.json';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // imgTitle =  'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/about-header.jpg?alt=media&token=b6ff3b36-2034-4e21-af78-c227ca2a4380'
  images!: any
  introduction!: string[]
  values!: any
  thumbsSwiper!: any
  leadershipImg!: any
  leadershipText!: string[]
  
  constructor() {}
  
  ngOnInit(): void {
    this.images = AboutData.slide
    this.introduction = AboutData.introduction.paragraphs
    this.values = AboutData.introduction['values']
    this.leadershipImg = AboutData.leadership.image
    this.leadershipText = AboutData.leadership.paragraphs
  }
}
