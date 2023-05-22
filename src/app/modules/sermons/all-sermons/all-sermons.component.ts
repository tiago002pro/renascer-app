import { Component } from '@angular/core';
import { SermonService } from '../service/sermon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-sermons',
  templateUrl: './all-sermons.component.html',
  styleUrls: ['./all-sermons.component.scss']
})
export class AllSermonsComponent {
  allSermons: any
  speakers!: any
  searchSpeakers!: any

  constructor(
    private sermonService: SermonService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.__initializingVariables()
  }

  async __initializingVariables(): Promise<void> {
    this.searchSpeakers = []
    this.allSermons = await this.__getAllSermons()
    await this.searchSpeaker('')
  }

  async __getAllSermons(): Promise<any> {
    return await this.sermonService.getAll()
  }

  async searchSpeaker(search: string) {
    this.speakers = await this.__searchAllSpeaker(search)
  }

  async __searchAllSpeaker(name:string): Promise<any> {
    return await this.sermonService.searchSpeakers(name)
  }

  async searchBySpeakers(name:string): Promise<void> {
    this.__createSpearkerListSearch(name)
    if (this.searchSpeakers.length > 0) {
      this.allSermons = await this.__searchBySpeakers()
    } else {
      this.allSermons = await this.__getAllSermons()
    }
  }

  async __searchBySpeakers(): Promise<any> {
    return await this.sermonService.searchBySpeakers(this.searchSpeakers)
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

  goToSermon(sermon: any) {
    this.router.navigate([`/sermon/${sermon.id}`, sermon])
  }
}
