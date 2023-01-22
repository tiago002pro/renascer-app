import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imgTitle =  './../../../assets/img/about.jpg'
  slides!: any[]
  visionDescription!: String
  missionDescription!: String
  
  constructor() {}
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoWidth : true , 
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false
  }
  
  ngOnInit(): void {
    this.missionDescription = "Nossa missão é adorar a Deus, proclamar o Evangelho no poder do Espírito Santo, fazer discípulos de Jesus e amar ao próximo."
    this.visionDescription = "Ser uma igreja fiel às Escrituras Sagradas, relevante à sociedade, que promove a transformação do ser humano e o seu desenvolvimento por meio do evangelho, em conformidade com os valores bíblicos."
    this.slides = [
      {id: 1, src: './../../../assets/img/background_1.jpg', title: 'Autoridade bíblica', description: 'A Bíblia como fonte de autoridade única de doutrina e conduta prática.'},
      {id: 2, src: './../../../assets/img/background_2.jpg', title: 'Santidade', description: 'A busca da santidade como ideal de vida cristã.'},
      {id: 3, src: './../../../assets/img/background_3.jpg', title: 'Família', description: 'Família, na perspectiva bíblica, como fundamento da sociedade.'},
      {id: 4, src: './../../../assets/img/background_4.jpg', title: 'Acolhimento', description: 'Acolhimento gracioso à todas as pessoas.'},
      {id: 5, src: './../../../assets/img/Fundo.jpg', title: 'Ética', description: 'Ética e transparência nas relações com a sociedade.'},
      {id: 6, src: './../../../assets/img/Fundo.jpg', title: 'Mordomia', description: 'Mordomia de tudo que Deus dá ao cristão, para a edificação da igreja e evangelização do mundo.'},
    ]
  }
}
