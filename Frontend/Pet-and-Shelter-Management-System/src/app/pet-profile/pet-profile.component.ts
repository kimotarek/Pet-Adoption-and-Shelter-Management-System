import { Component } from '@angular/core';
import { Shelter } from '../objects/shelters';
import { HttpErrorResponse } from '@angular/common/http';
import { ShelterserviceService } from '../services/shelterService/shelterservice.service';
import { ApplicationServiceService } from '../services/ApplicationService/application-service.service';
declare const $: any;

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent {

  constructor(private service:ApplicationServiceService) {

  }

  ngOnInit(): void {}



  close() {
    $('#confirm').modal('hide');

  }

  Adopt(){
    this.service.add_pet(1,'ibrahim').subscribe((x) => {
      console.log(x)
      this.close();
      error: (error: HttpErrorResponse) => alert(error.message);
    });    
  }

}
