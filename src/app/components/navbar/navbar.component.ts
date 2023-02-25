import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  tabsNavigate: Array<any> = []
  showMobileMenu: Boolean = false
  @ViewChild('mobileMenu', {static: true}) el!:ElementRef;
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.__createNavigateTabs()
  }

  __createNavigateTabs() {
    this.tabsNavigate = [
      { label: "Home", router: "home", icon: "bi bi-house" },
      { label: "A Renascer", router: "about", icon: "bi bi-building" },
      { label: "Onde Estamos", router: "where-we-are", icon: "bi bi-geo-alt" },
      { label: "Sermões", router: "sermons", icon: "bi bi-play" },
      // { label: "Liderança", router: "leadership", icon: "bi bi-people" },
      // { label: "Ministérios", router: "departments", icon: "bi bi-diagram-3" },
      // { label: "Contato", router: "contact", icon: "bi bi-envelope-open-heart" },
    ]
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu
  }

  routerLink(link: string) {
    this.router.navigate([link])
    this.toggleMobileMenu()
  }
}
