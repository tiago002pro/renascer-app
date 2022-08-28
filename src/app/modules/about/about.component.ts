import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  sectionTwo = [
    { title: "Our Beliefs", router: "beliefs" },
    { title: "Departments", router: "departments" },
    { title: "Leadership", router: "leadership" },
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
