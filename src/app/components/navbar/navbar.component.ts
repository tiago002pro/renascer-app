import { Router } from '@angular/router';
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
  socialMedia: Array<any> = []
  showMobileMenu = false
  activeClass = "active"
  show_menu = false
  subitems = [
    {name: "Home", router: "home", icon: "bi bi-play"},
    {name: "Quem Somos", router: "about", icon: "bi bi-play"},
    {name: "Onde Estamos", router: "where-we-are", icon: "bi bi-play"},
    {name: "Sermões", router: "sermons", icon: "bi bi-play"},
    {name: "Store", router: "", icon: "bi bi-play"},
    {name: "Giving", router: "", icon: "bi bi-play"},
  ]

  constructor(
    private ElByClassName: ElementRef,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createMenu()
    this.createSocialMedia()
    this.showMobileMenu = false
  }

  createMenu() {
    this.menuItens = [
      {label: "Home", router: "home"},
      {label: "Quem Somos", router: "about"},
      {label: "Onde Estamos", router: "where-we-are"},
      {label: "Sermões", router: "sermons"},
      // {label: "Colabore", router: "home"},
      // {label: "Culto Ao Vivo", router: "home"},
      // {label: "Contato", router: "home"},
    ]
  }

  addClickEvent() {
    const navList = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.nav-list-mobile')
    const mobileMenu = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.mobile-menu')

    navList?.classList.toggle(this.activeClass)
    mobileMenu?.classList.toggle(this.activeClass)

    this.showMobileMenu = !this.showMobileMenu
  }

  createSocialMedia() {
    this.socialMedia = [
      {name: "Instagran", link: "https://www.instagram.com/renascermaringa/?hl=pt-br", icon: "bi bi-instagram"},
      {name: "Facebook", link: "https://www.facebook.com/igrejarenascermaringa", icon: "bi bi-facebook"},
      {name: "Twitter", link: "https://twitter.com/renascermaringa", icon: "bi bi-twitter"},
      {name: "Youtube", link: "https://www.youtube.com/c/RenascerMaring%C3%A1", icon: "bi bi-youtube"},
      {name: "WhatsApp", link: "http://api.whatsapp.com/send?1=pt_BR&phone=554430302570", icon: "bi bi-whatsapp"},
    ]
  }

  openLink(link: any) {
    window.open(link)
  }

  showMenu() {
    this.show_menu = !this.show_menu
  }

  routerLink(link: string) {
    this.showMenu()
    this.router.navigate([link])
  }
}
