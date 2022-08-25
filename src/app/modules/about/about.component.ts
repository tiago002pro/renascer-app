import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToDepartment() {
    this.router.navigate(['department'], {relativeTo: this.route})
  }

  goToLidership() {
    this.router.navigate(['leadership'], {relativeTo: this.route})
  }

  goToVision() {
    this.router.navigate(['vision'], {relativeTo: this.route})
  }

}
