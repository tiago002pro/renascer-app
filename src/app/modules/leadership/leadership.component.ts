import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  imgTitle = './../../../assets/img/module-leadership.jpg'

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  goToAbout() {
    this.router.navigate(['about'])
  }
}
