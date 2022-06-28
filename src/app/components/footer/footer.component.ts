import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMedia: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.createSocialMedia()
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
}
