import { Component } from '@angular/core';
import { Sermon } from '../assets/interface/link-sermons';
import { lastValueFrom } from 'rxjs';

import { SermonService } from '../service/sermon.service';

@Component({
  selector: 'app-all-sermons',
  templateUrl: './all-sermons.component.html',
  styleUrls: ['./all-sermons.component.scss']
})
export class AllSermonsComponent {
  imgTitle!: string
  allSermons: Array<Sermon> | undefined
  speakers!: any
  searchSpeakers!: any

  constructor(
    private sermonService: SermonService
  ) {
    this.imgTitle = '../../../../assets/img/module-sermons.jpg'
  }

  async ngOnInit(): Promise<void> {
    this.searchSpeakers = []
    await this.__loadSermons()
    await this.searchAllSpeaker('')
  }

  async __loadSermons() {
    this.allSermons = await this.sermonService.getAll().toPromise().then((res) => res)
  }

  async searchBySpeakers(name: string) {
    this.__createSpearkerListSearch(name)
    this.allSermons = await this.sermonService.searchBySpeakers(this.searchSpeakers).toPromise().then((res: any) => res)
  }

  async searchAllSpeaker(name: string) {
    this.speakers = await this.sermonService.searchAllSpeaker(name).toPromise().then((res) => res)
  }

  __createSpearkerListSearch(speaker: string) {
    if (!this.searchSpeakers.includes(speaker)) {
      this.searchSpeakers.push(speaker)
    } else {
      const index = this.searchSpeakers.indexOf(speaker)
      if (index >= 0) {
        this.searchSpeakers.splice(index, 1)
      }
    }
  }

  filterTheName(name: string) {
    return this.searchSpeakers.includes(name)
  }
}
