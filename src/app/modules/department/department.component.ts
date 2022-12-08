import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  imgTitle =  './../../../assets/img/module-departament.jpg'

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  goToAbout() {
    this.router.navigate(['about'])
  }
}
