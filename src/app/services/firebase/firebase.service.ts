import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage'
import { StorageReference } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  file!: any

  constructor(
    private storage: Storage,
  ) { }

  async uploadImage(image: any) {
    this.file = image.target.files[0]
    const storageRef = ref(this.storage, this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file)

    await uploadTask.on('state_changed',
      (spapshot) => {
        const progress = (spapshot.bytesTransferred / spapshot.totalBytes) * 100
        // console.log("upload is " + progress + "% done");
      },
      (error) => {
        console.log(error.message);
      },
    )
    return getDownloadURL(uploadTask.snapshot.ref).then((response) => response)
  }

  getUrl(uploadTask: { snapshot: { ref: StorageReference; }; }) {
    return getDownloadURL(uploadTask.snapshot.ref).then((response) => response)
  }
}
