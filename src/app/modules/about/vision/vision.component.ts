import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {

  title = "Our Beliefs"
  text = "Our approach to beliefs centers around one main belief, the person Jesus Christ. Through that Person, His statements, and His actions we interpret and conclude all other beliefs."
  text2 = "That said, below are some of our core beliefs."

  constructor() { }

  ngOnInit(): void {
  }

}
