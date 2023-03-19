import { Component } from '@angular/core';
import { Sermon } from '../assets/interface/link-sermons';

import { SermonService } from '../service/sermon.service';

@Component({
  selector: 'app-all-sermons',
  templateUrl: './all-sermons.component.html',
  styleUrls: ['./all-sermons.component.scss']
})
export class AllSermonsComponent {
  allSermons: Sermon[] | undefined
  speakers!: any
  searchSpeakers!: any

  constructor(
    private sermonService: SermonService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.searchSpeakers = []
    this.allSermons = await this.__getAllSermons()
    await this.searchAllSpeaker('')
  }

  async __getAllSermons() {
    return await this.sermonService.getAll().toPromise().then((res) => res)
  }

  async __searchBySpeakers() {
    return await this.sermonService.searchBySpeakers(this.searchSpeakers).toPromise().then((res: any) => res)
  }

  async searchAllSpeaker(name: string) {
    this.speakers = await this.sermonService.searchSpeakers(name).toPromise().then((res) => res)
  }

  async searchBySpeakers(name: string) {
    this.__createSpearkerListSearch(name)
    if (this.searchSpeakers.length > 0) {
      this.allSermons = await this.sermonService.searchBySpeakers(this.searchSpeakers).toPromise().then((res: any) => res)
    } else {
      this.allSermons = await this.__getAllSermons()
    }
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
