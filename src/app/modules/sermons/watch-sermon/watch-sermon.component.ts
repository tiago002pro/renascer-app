import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-watch-sermon',
  templateUrl: './watch-sermon.component.html',
  styleUrls: ['./watch-sermon.component.scss']
})
export class WatchSermonComponent {
  sermon!:any
  videoURL!:any
  videoDATE!:any

  constructor(
    private route:ActivatedRoute,
    private _sanitizer:DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.__initializingVariables()
    this.loadSermon()
    this.loadVideo()
  }

  __initializingVariables():void {
    this.__initializeSermon()
    this.__initializeVideo()
  }

  __initializeSermon():void {
    this.sermon = {
      id: null,
      video_id: null,
      youtube_frame: null,
      title: null,
      author: null,
      description: null,
      date: null,
      cover_image: null,
      category: null,
      notified: null,
    }
  }
  __initializeVideo():void {
    this.videoURL = this._sanitizer.bypassSecurityTrustResourceUrl('null');
    this.videoDATE = null;
  }

  loadSermon() {
    this.sermon = this.route.snapshot.params
  }

  loadVideo():void {
    this.videoURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.sermon.youtube_frame)
    this.videoDATE = moment(this.sermon.date).format("LL");   
  }
}
