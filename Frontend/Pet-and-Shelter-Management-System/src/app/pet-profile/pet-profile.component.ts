import { Component } from '@angular/core';
import { Shelter } from '../objects/shelters';
import { HttpErrorResponse } from '@angular/common/http';
import { ShelterserviceService } from '../services/shelterService/shelterservice.service';
import { ApplicationServiceService } from '../services/ApplicationService/application-service.service';
import { PetServiceService } from '../services/petService/pet-service.service';
import { Pets } from '../objects/pets';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';

 declare const $: any;

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent {

  petDocuments:any[]=[];
  selected_pet:Pets=new Pets();
  medical_reports:any;;
  dataUrl:any;
  constructor(private service:ApplicationServiceService, private servicepet:PetServiceService,
    private sanitizer: DomSanitizer,) {


    this.servicepet.get_pet_profile(this.servicepet.pet_profile.id).subscribe((x) => {
      console.log(x)
      this.selected_pet=x;
      this.petDocuments=x.petDocuments;
      for (let i = 0; i <this.petDocuments.length; i++) {
        if(this.petDocuments[i].documentType=="MEDICAL_RECORD"){
          this.medical_reports=this.petDocuments[i].documentContent;
          break;
        }
      }
      console.log(this.medical_reports);
      this.view_document()
    error: (error: HttpErrorResponse) => alert(error.message);
    });    


  }
 
  documentBlobUrls: SafeUrl[] = [];


  view_document(){
    
    var document = this.medical_reports;
    if (document) {
      const uint8Array = new Uint8Array(atob(document).split('').map(char => char.charCodeAt(0)))
      const blob = new Blob([uint8Array], { type: 'application/pdf' });
      const blobUrl = URL.createObjectURL(blob);
      let tempUrl;
      tempUrl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
      this.dataUrl=tempUrl;
      this.documentBlobUrls.push(tempUrl);
      return tempUrl;
    }
    return null;
  }

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
