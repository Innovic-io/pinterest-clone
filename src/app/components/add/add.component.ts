import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPin } from '../../models/dashboard-card-items.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  imageUrl: string;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor( private dataService: DataService) {}

  addPin(pin: IPin) {

    const pinWithNewImage = { ...pin, url: '/assets/dress.jpg' };

    this.dataService.createPin(pinWithNewImage);
    this.clearSelectedPicture();
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
    this.clearSelectedPicture();
  }

  clearSelectedPicture() {
    this.imageUrl = null;
    this.fileInput.nativeElement.value = null;
  }
}
