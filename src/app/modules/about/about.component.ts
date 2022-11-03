import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  sectionTwo = [
    { title: "Liderança", router: "leadership" },
    { title: "Visão", router: "beliefs" },
    { title: "Ministérios", router: "departments" },
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(router: string) {
    this.router.navigate([router], {relativeTo: this.route})
  }
}
