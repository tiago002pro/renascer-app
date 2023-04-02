import { Component } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from "src/app/services/firebase/firebase.service";

@Component({
  selector: 'new-sermon-content',
  standalone: true,
  templateUrl: './new-sermon-modal.html',
  styleUrls: ['./new-sermon-modal.scss'],
})
export class newSermponContent {
  constructor(
    public activeModal: NgbActiveModal,
    private firebaseService: FirebaseService
  ) {}

  async uploadImage(file: any) {
    const urlImg = await this.firebaseService.uploadImage(file)
    console.log("urlImg", urlImg);
  }
}