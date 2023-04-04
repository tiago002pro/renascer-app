import { Component } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from "src/app/services/firebase/firebase.service";

@Component({
  selector: 'form-sermon-modal',
  standalone: true,
  templateUrl: './form-sermon-modal.html',
  styleUrls: ['./form-sermon-modal.scss'],
})
export class FormSermonModal {
  constructor(
    public activeModal: NgbActiveModal,
    private firebaseService: FirebaseService
  ) {}

  async uploadImage(file: any) {
    const urlImg = await this.firebaseService.uploadImage(file)
    console.log("urlImg", urlImg);
  }
}