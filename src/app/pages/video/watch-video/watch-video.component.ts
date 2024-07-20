import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import moment from 'moment';
import { VideosService } from '../service/videos.service';

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.scss']
})
export class WatchVideoComponent {
  video!:any
  videoURL!:SafeResourceUrl
  videoDATE!:string

  constructor(
    private route:ActivatedRoute,
    private _sanitizer:DomSanitizer,
    private videosService:VideosService,
  ) {}

  async ngOnInit():Promise<void> {
    await this.__initializeEnvironment()
  }

  private async __initializeEnvironment():Promise<void> {
    await this.__getById()
    this.__initializeVideoData()
  }

  private async __getById():Promise<void> {
    const id = this.route.snapshot.params.id
    this.video = await this.videosService.getById(id).toPromise().then((response:any) => response)
  }

  private __initializeVideoData():void {
    this.videoURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.video.youtubeFrame)
    this.videoDATE = moment(this.video.date).format("LL");  
  }
}
