import { Component } from '@angular/core';
import { Sermon } from '../assets/interface/link-sermons';

import { SermonService } from '../service/sermon.service';

@Component({
  selector: 'app-all-sermons',
  templateUrl: './all-sermons.component.html',
  styleUrls: ['./all-sermons.component.scss']
})
export class AllSermonsComponent {
  allSermons:any
  speakers!:any
  searchSpeakers!:any

  constructor(
    private sermonService:SermonService,
  ) {}

  async ngOnInit():Promise<void> {
    this.__initializingVariables()
    await this.__loadSermons()
    await this.getSpeakers('')
  }

  __initializingVariables():void {
    this.searchSpeakers = []
  }

  async __loadSermons():Promise<void> {
    this.allSermons = await this.__getAllSermons()
  }

  async __getAllSermons():Promise<any> {
    return await this.sermonService.getAll().toPromise().then((res) => res)
  }

  async getSpeakers(name:string):Promise<void> {
    this.speakers = await this.__searchAllSpeaker(name)
  }

  async __searchAllSpeaker(name:string):Promise<any> {
    return await this.sermonService.searchSpeakers(name).toPromise().then((res) => res)
  }

  async searchBySpeakers(name:string):Promise<void> {
    this.__createSpearkerListSearch(name)
    if (this.searchSpeakers.length > 0) {
      this.allSermons = await this.__searchBySpeakers()
    } else {
      this.allSermons = await this.__getAllSermons()
    }
  }

  async __searchBySpeakers():Promise<any> {
    return await this.sermonService.searchBySpeakers(this.searchSpeakers).toPromise().then((res:any) => res)
  }

  __createSpearkerListSearch(speaker:string):void {
    if (!this.searchSpeakers.includes(speaker)) {
      this.searchSpeakers.push(speaker)
    } else {
      const index = this.searchSpeakers.indexOf(speaker)
      if (index >= 0) {
        this.searchSpeakers.splice(index, 1)
      }
    }
  }

  filterTheName(name:string):Boolean {
    return this.searchSpeakers.includes(name)
  }
}
