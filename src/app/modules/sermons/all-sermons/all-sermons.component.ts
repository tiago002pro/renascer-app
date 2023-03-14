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

  constructor(
    private sermonService: SermonService
  ) {
    this.imgTitle = '../../../../assets/img/module-sermons.jpg'
  }

  ngOnInit(): void {
    this.__loadSermons()
  }

  __loadSermons() {
    this.sermonService.getAll().toPromise().then((res) => {
      this.allSermons = res
    })
  }
}
