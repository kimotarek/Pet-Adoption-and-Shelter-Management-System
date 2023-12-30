import { Component } from '@angular/core';
import { Shelter } from '../objects/shelters';
import { HttpErrorResponse } from '@angular/common/http';
import { ShelterserviceService } from '../services/shelterService/shelterservice.service';
import { BreedServiceService } from '../services/breedService/breed-service.service';
import { speciebreed } from '../objects/speciebreed';
import { ApplicationDTO } from '../objects/appDTO';
import { ApplicationServiceService } from '../services/ApplicationService/application-service.service';
declare const $: any;

@Component({
  selector: 'app-staff-application',
  templateUrl: './staff-application.component.html',
  styleUrls: ['./staff-application.component.css']
})
export class StaffApplicationComponent {

  ApplicationDTO: ApplicationDTO[] = [
    {
      idOfApp:"6",
      statusOfApp:"pending",
      petName:"Hunter",
      adopterName:"ibrahim"
    },
    {
      idOfApp:"1",
      statusOfApp:"pending",
      petName:"Hunter",
      adopterName:"ibrahim"
    },
  ];
  constructor(private service:ApplicationServiceService) {
    
    this.service.get_apps("karim").subscribe((x) => {
      let extractedArray = x.filter((item:any) => item.statusOfApp === "pending");
      this.ApplicationDTO=extractedArray;
      error: (error: HttpErrorResponse) => alert(error.message);
    });

  }

  Accept(app:any){

    this.service.response_app("accepted",app.idOfApp).subscribe((x) => {
      let extractedArray = x.filter((item:any) => item.statusOfApp === "pending");
      this.ApplicationDTO=extractedArray;
      error: (error: HttpErrorResponse) => alert(error.message);
    });
  }
  reject(app:any){
    this.service.response_app("declined",app.idOfApp).subscribe((x) => {
      let extractedArray = x.filter((item:any) => item.statusOfApp === "pending");
      this.ApplicationDTO=extractedArray;
      error: (error: HttpErrorResponse) => alert(error.message);
    });
  }

  ngOnInit(): void {}


}
