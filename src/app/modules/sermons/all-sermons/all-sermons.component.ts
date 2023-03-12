import { Component } from '@angular/core';
import { Sermon } from '../assets/interface/link-sermons';

import allSermonsData from '../assets/json/all-sermons.json';

@Component({
  selector: 'app-all-sermons',
  templateUrl: './all-sermons.component.html',
  styleUrls: ['./all-sermons.component.scss']
})
export class AllSermonsComponent {
  imgTitle!: string
  allSermons: Array<Sermon> | undefined
  speakers!: string

  constructor() {
    this.imgTitle = '../../../../assets/img/module-sermons.jpg'
    // this.allSermons = allSermonsData
  }

  ngOnInit(): void {
    this.__loadSpeakers()
  }

  __loadSpeakers() {
    console.log(this.allSermons);
  }
}
