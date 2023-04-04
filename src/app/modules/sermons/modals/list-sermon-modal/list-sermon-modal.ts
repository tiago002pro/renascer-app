import { Component } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'list-sermon-modal',
  standalone: true,
  templateUrl: './list-sermon-modal.html',
  styleUrls: ['./list-sermon-modal.scss'],
})
export class listSermonModal {
  constructor(
    public activeModal: NgbActiveModal,
  ) {}


}