import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideosService } from '../service/videos.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideosComponent {
  search!:string
  videoList:any

  constructor(
    private router:Router,
    private videosService:VideosService,
  ) {}

  async ngOnInit():Promise<void> {
    await this.__initializeEnvironment()
  }

  private async __initializeEnvironment():Promise<void> {
    this.search = ''
    await this.searchVideos(this.search)
  }

  public async searchVideos(search:any) {
    this.videoList = await this.videosService.searchVideos(search).toPromise().then((response:any) => response)
  }

  public goToVideo(video:any):void {
    this.router.navigate([`/video/${video.id}`])
  }
}
