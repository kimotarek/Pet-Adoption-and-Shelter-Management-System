import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalPopServiceService } from '../services/modal-pop-service-service.service';
import { Router } from '@angular/router';
import { Pets } from '../objects/pets';
import { PetServiceService } from '../services/petService/pet-service.service';

@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-home.component.html',
  styleUrls: ['./pet-home.component.css']
})
export class PetHomeComponent {



  flag_type = false;
  photo_url: any = null;
  photo_event_service: any = null;
  photo_sendin_service: any;
  current_pet:Pets=new Pets()
  constructor(
    // private service: ServicService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private popup: ModalPopServiceService,
    private service:PetServiceService
  ) {
   
    this.current_pet = this.service.pet_profile
    // this.get_user_photo();
  }

  ngOnInit(): void {}

  onFileSelect(event: any) {
    const file = event.target.files[0];
    this.photo_event_service = event;
    if (!(file instanceof Blob)) {
      console.error('Invalid file type');
      return;
    }

    // Create a FileReader object
    const reader = new FileReader();

    // Set up an event listener for when the file is loaded
    reader.onload = (event: any) => {
      // this.service.user.photo = event.target.result;
      this.photo_url = event.target.result;
      // this.current_user.photo=event.target.result;
      // Reset the input field
      event.target.value = '';
    };
    // Read the file as a data URL
    reader.readAsDataURL(file);
  }

  add_user_photo() {
    if (this.photo_event_service == null) {
      return;
    }
    const inputElement = this.photo_event_service.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.photo_sendin_service = inputElement.files[0];
    }

    if (this.photo_sendin_service) {
      const formData = new FormData();
      formData.append('photo', this.photo_sendin_service);

      // this.service.change_photo_user(formData).subscribe((x) => {
      //   if (x.success) {
      //     this.current_user.photo = this.photo_url;
      //     this.service.user.photo = this.photo_url;
      //     this.photo_event_service = null;
      //   } else {
      //     //error message
      //   }
      // });
    }
  }

  logout() {
 
  }
}
