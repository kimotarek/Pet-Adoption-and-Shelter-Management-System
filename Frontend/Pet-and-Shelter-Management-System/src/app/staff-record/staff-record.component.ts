import { Component } from '@angular/core';
import { ApplicationServiceService } from '../services/ApplicationService/application-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationDTO } from '../objects/appDTO';

@Component({
  selector: 'app-staff-record',
  templateUrl: './staff-record.component.html',
  styleUrls: ['./staff-record.component.css']
})
export class StaffRecordComponent {

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
      let extractedArray = x.filter((item:any) => item.statusOfApp != "pending");
      this.ApplicationDTO=extractedArray;
      error: (error: HttpErrorResponse) => alert(error.message);
    });

  }
}
