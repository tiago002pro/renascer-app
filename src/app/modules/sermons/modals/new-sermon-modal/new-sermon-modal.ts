import { Component } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'new-sermon-content',
  standalone: true,
  templateUrl: './new-sermon-modal.html',
  styleUrls: ['./new-sermon-modal.scss'],
})
export class newSermponContent {
  file: any
  constructor(
    public activeModal: NgbActiveModal,
  ) {}
}