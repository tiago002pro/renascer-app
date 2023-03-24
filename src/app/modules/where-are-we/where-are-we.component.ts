import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-where-are-we',
  templateUrl: './where-are-we.component.html',
  styleUrls: ['./where-are-we.component.scss']
})
export class WhereAreWeComponent implements OnInit {
  imgTitle =  './../../../assets/img/Contact-2.jpg'
  private map!: any;


  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
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
  });

  const marker = L.marker([-23.376373474794963, -51.938296850489365], {icon: icon}).addTo(this.map);

    tiles.addTo(this.map);
  }
}
