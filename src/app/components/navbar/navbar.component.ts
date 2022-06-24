import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('navLinkFade', [
      state('from', style({opacity: 0, transform: 'translateX(50px)'})),
      state('to', style({opacity: 1, transform: 'translateX(0)'})),
      transition('from => to', [animate('0.5s 0.3s ease')]),
      transition('to => from', [animate('1s')]),
    ])
  ]
})

export class NavbarComponent implements OnInit {
  showMenu = true
  activeClass = "active"

  constructor(
    private ElByClassName: ElementRef
  ) { }

  ngOnInit(): void {
  }

  addClickEvent() {
    const navList = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.nav-list')
    const mobileMenu = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.mobile-menu')

    navList?.classList.toggle(this.activeClass)
    mobileMenu?.classList.toggle(this.activeClass)

    this.showMenu = !this.showMenu
  }
}
