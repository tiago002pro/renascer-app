import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination, Scrollbar, Swiper, SwiperOptions, Thumbs } from "swiper";
import { SermonService } from '../sermons/service/sermon.service';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, Thumbs, FreeMode]);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  imgTitle =  './../../../assets/img/Contact.jpg'
  swiperConfig!: SwiperOptions
  images!: any

  constructor(
    private sermonService:SermonService,
  ) { }

  async ngOnInit():Promise<void> {
    this.swiperConfig = {
      slidesPerView: 1,
      navigation: true,
      scrollbar: { draggable: true },
      autoplay: {delay: 2500, disableOnInteraction: false},
    }

    await this.__loadImages()
  }

  async __loadImages():Promise<void> {
    this.images = await this.sermonService.getAll().toPromise().then((res) => res)
  }
}
