import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  imageUrl: string;

  @ViewChild('fileInput') fileInput: ElementRef;

  addPin(data) {
    console.log(data);
  }

  handleFileInput(file: FileList) {

    const fileToUpload: File = file.item(0);
    const reader = new FileReader();

    if (fileToUpload && fileToUpload.type.match('image.*')) {
      reader.readAsDataURL(fileToUpload);
    }

    reader.onloadend = (event: any) => {
      this.imageUrl = event.target.result;
    };

    this.fileInput.nativeElement.value = null;
  }

  clearSelectedPicture() {
    this.imageUrl = null;
  }
}
