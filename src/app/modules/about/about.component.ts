import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imgTitle =  './../../../assets/img/module-about.jpg'

  constructor(
  ) { }

  ngOnInit(): void {}
}
