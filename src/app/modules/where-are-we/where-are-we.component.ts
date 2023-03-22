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

    const marker = L.marker([-23.376373474794963, -51.938296850489365]).addTo(this.map);

    var circle = L.circle([-23.376373474794963, -51.938296850489365], {
      color: '#1c1c1c',
      fillColor: '#1c1c1c',
      fillOpacity: 0.5,
      radius: 500
  }).addTo(this.map);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 50,
      minZoom: 15,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
