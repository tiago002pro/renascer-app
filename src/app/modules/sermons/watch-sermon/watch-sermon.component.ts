import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { SermonService } from '../service/sermon.service';

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
    private sermonService: SermonService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
  ) {
    this.__initializeSermon()
  }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params['id']
    this.sermon = await this.sermonService.getById(id).toPromise().then((res:any) => res)
    this.videoURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.sermon.url)
    this.videoDATE = moment(this.sermon.date).format("MMM Do YY");    
  }

  __initializeSermon() {
    this.sermon = {
      id: null,
      url: null,
      img: null,
      title: null, 
      speaker: null,
      description: null,
      date: null,
    }
  }
}
