import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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
  showMobileMenu: Boolean = false

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.__createMenuItens()
    this.__createSocialMedia()
  }

  __createMenuItens() {
    this.menuItens = [
      {
        label: "Home", 
        router: "home", 
        icon: "bi bi-house"
      },
      {
        label: "Quem Somos", 
        router: "about", 
        icon: "bi bi-building"
      },
      {
        label: "Onde Estamos", 
        router: "where-we-are", 
        icon: "bi bi-geo-alt"
      },
      {
        label: "Sermões", 
        router: "sermons", 
        icon: "bi bi-play"
      },
      {
        label: "Loja", 
        router: "", 
        icon: "bi bi-cart3"
      },
      {
        label: "Contato", 
        router: "", 
        icon: "bi bi-chat-square-heart"
      },
    ]
  }

  __createSocialMedia() {
    this.socialMedia = [
      {
        name: "Instagran", 
        link: "https://www.instagram.com/renascermaringa/?hl=pt-br", 
        icon: "bi bi-instagram"
      },
      {
        name: "Facebook", 
        link: "https://www.facebook.com/igrejarenascermaringa", 
        icon: "bi bi-facebook"
      },
      {
        name: "Twitter", 
        link: "https://twitter.com/renascermaringa", 
        icon: "bi bi-twitter"
      },
      {
        name: "Youtube", 
        link: "https://www.youtube.com/c/RenascerMaring%C3%A1", 
        icon: "bi bi-youtube"
      },
      {
        name: "WhatsApp", 
        link: "http://api.whatsapp.com/send?1=pt_BR&phone=554430302570", 
        icon: "bi bi-whatsapp"
      },
    ]
  }

  openLink(link: any) {
    window.open(link)
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu
  }

  routerLink(link: string) {
    this.router.navigate([link])
    this.toggleMobileMenu()
  }
}
