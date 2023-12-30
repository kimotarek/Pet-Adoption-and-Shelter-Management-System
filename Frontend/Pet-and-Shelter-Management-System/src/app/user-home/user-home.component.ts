import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalPopServiceService } from '../services/modal-pop-service-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  flag_type = false;
  photo_url: any = null;
  photo_event_service: any = null;
  photo_sendin_service: any;
  current_user = {
    first_name: 'Ahmed',
    last_name: 'Ali',
    photo: '../../assets/images/user.jpg',
    _id: '1256893',
    shelter:"pet care shelter"

  };
  constructor(
    // private service: ServicService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private popup: ModalPopServiceService
  ) {
   
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

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("userName")
    localStorage.removeItem("role")

    this.router.navigate(['']);
  }
}
