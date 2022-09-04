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
  menuItens: Array<any> = []
  showMobileMenu = false
  activeClass = "active"

  constructor(
    private ElByClassName: ElementRef
  ) { }

  ngOnInit(): void {
    this.createMenu()
    this.showMobileMenu = false
  }

  createMenu() {
    this.menuItens = [
      {label: "Home", router: "home"},
      {label: "Onde Estamos", router: "where-we-are"},
    ]
  }

  addClickEvent() {
    const navList = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.nav-list-mobile')
    const mobileMenu = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.mobile-menu')

    navList?.classList.toggle(this.activeClass)
    mobileMenu?.classList.toggle(this.activeClass)

    this.showMobileMenu = !this.showMobileMenu
  }
}
