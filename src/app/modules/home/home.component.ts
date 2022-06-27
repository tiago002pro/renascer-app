import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private ElByClassName: ElementRef
  ) { }

  ngOnInit(): void {
    const teste = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.progress-bar')
    
    teste?.classList.toggle('progress-bar--1')

    setTimeout(() => {
      teste?.classList.toggle(`progress-bar--60`)
    }, 1000);
  }
}
