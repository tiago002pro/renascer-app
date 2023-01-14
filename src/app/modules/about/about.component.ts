import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imgTitle =  './../../../assets/img/module-about.jpg'
  slides!: any[]
  constructor(
  ) { }

  ngOnInit(): void {
    this.slides = [
      {id: 1, src: './../../../assets/img/background_2.jpg', title: 'AUTORIDADE BÍBLICA', subtitle: 'A Bíblia como fonte de autoridade única de doutrina e conduta prática.'},
      {id: 2, src: './../../../assets/img/background-white.jpg', title: 'SANTIDADE', subtitle: 'A busca da santidade como ideal de vida cristã'},
      {id: 3, src: './../../../assets/img/background-white.jpg', title: 'FAMÍLIA', subtitle: 'Família, na perspectiva bíblica, como fundamento da sociedade.'},
      {id: 4, src: './../../../assets/img/background-white.jpg', title: 'ACOLHIMENTO', subtitle: 'Acolhimento gracioso à todas as pessoas.'},
      {id: 5, src: './../../../assets/img/background-white.jpg', title: 'ÉTICA', subtitle: 'Ética e transparência nas relações com a sociedade.'},
      {id: 6, src: './../../../assets/img/background-white.jpg', title: 'MORDOMIA', subtitle: 'Mordomia de tudo que Deus dá ao cristão, para a edificação da igreja e evangelização do mundo.'},
    ]
  }
}
