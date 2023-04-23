import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-where-are-we',
  templateUrl: './where-are-we.component.html',
  styleUrls: ['./where-are-we.component.scss']
})
export class WhereAreWeComponent implements OnInit {
  map!: any;
  socialMedia!: any

  constructor() { }

  ngOnInit(): void {
    this.__initMap();
    this.__loadSocialMedia()
  }

  __initMap(): void {
    this.map = L.map('map', {
      center: [-23.376373474794963, -51.938296850489365],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 50,
      minZoom: 15,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const icon = L.icon({
      iconUrl: './../../../assets/img/location-icon.png',
      shadowUrl: './../../../assets/img/location-shadow-icon.png',
  
      iconSize:     [95, 95], // size of the icon
      shadowSize:   [64, 64], // size of the shadow
      iconAnchor:   [50, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [-5, 65],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    })

    L.marker([-23.376373474794963, -51.938296850489365], {icon: icon}).addTo(this.map);
    tiles.addTo(this.map);
  }

  openRoutes() {
    window.open("https://www.google.com/maps/dir//renascer+maringa/@-23.3969393,-51.944497,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ecd689d1cdfa2d:0x14b0e34c1da80b1b!2m2!1d-51.9383009!2d-23.3769624")
  }

  __loadSocialMedia() {
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