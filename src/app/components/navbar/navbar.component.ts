import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('navLinkFade', [
      state('show', style({filter:' blur(0px)'})),
      state('hide', style({filter:' blur(0px)'})),
      transition('show => hide', [animate('0.5s ease', style({filter:' blur(8px)'}))], ),
      transition('hide => show', [animate('0.5s ease', style({filter:' blur(8px)'}))]),
    ])
  ]
})

export class NavbarComponent implements OnInit {
  tabsNavigate: Array<any> = []
  socialMedia: Array<any> = []
  showMobileMenu: Boolean = false
  @ViewChild('mobileMenu', {static: true}) el!:ElementRef;
  
  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.__createNavigateTabs()
    this.__createSocialMedia()
  }

  __createNavigateTabs() {
    this.tabsNavigate = [
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
