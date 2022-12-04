import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-module',
  templateUrl: './title-module.component.html',
  styleUrls: ['./title-module.component.scss']
})
export class TitleModuleComponent implements OnInit {
  @Input() image!: String;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {}
}
