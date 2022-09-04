import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  carouselVideos = [
    {
      banner: [
        {img: '../../../assets/img/background_1.jpg', title: 'It’s Your Door', speaker: 'Pastor Steven Furtick'},
        {img: '../../../assets/img/background_1.jpg', title: 'It Was A Good Fight', speaker: 'Pastor Larry Bre'},
        {img: '../../../assets/img/background_1.jpg', title: 'Faithful With A Few', speaker: 'Pastor Steven Furtick'},
      ],
    },
    {
      banner: [
        {img: '../../../assets/img/background_2.jpg', title: 'It’s Your Door', speaker: 'Pastor Steven Furtick'},
        {img: '../../../assets/img/background_2.jpg', title: 'It Was A Good Fight', speaker: 'Pastor Larry Bre'},
        {img: '../../../assets/img/background_2.jpg', title: 'Faithful With A Few', speaker: 'Pastor Steven Furtick'},
      ],
    },
    {
      banner: [
        {img: '../../../assets/img/background_3.jpg', title: 'It’s Your Door', speaker: 'Pastor Steven Furtick'},
        {img: '../../../assets/img/background_3.jpg', title: 'It Was A Good Fight', speaker: 'Pastor Larry Bre'},
        {img: '../../../assets/img/background_3.jpg', title: 'Faithful With A Few', speaker: 'Pastor Steven Furtick'},
      ],
    },
    {
      banner: [
        {img: '../../../assets/img/background_4.jpg', title: 'It’s Your Door', speaker: 'Pastor Steven Furtick'},
        {img: '../../../assets/img/background_4.jpg', title: 'It Was A Good Fight', speaker: 'Pastor Larry Bre'},
        {img: '../../../assets/img/background_4.jpg', title: 'Faithful With A Few', speaker: 'Pastor Steven Furtick'},
      ],
    }
  ]
  
  constructor(
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    // this.readyState()
  }

  readyState() {
    do {
      this.ngxService.start()
    } while (document.readyState == "complete")
    this.ngxService.stop()
  }
}
