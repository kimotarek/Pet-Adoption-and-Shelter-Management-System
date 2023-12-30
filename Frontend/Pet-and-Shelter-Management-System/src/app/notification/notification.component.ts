import { Component } from '@angular/core';
import { Shelter } from '../objects/shelters';
import { HttpErrorResponse } from '@angular/common/http';
import { ShelterserviceService } from '../services/shelterService/shelterservice.service';
import { Notification } from '../objects/notification';
import { NotificationserviceService } from '../services/NotificationService/notificationservice.service';
declare const $: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
    notification: Notification[] = [
    {
      id:"1",
      date:"2/20/2022",
      content:"Dear [User],We are excited to announce a major update to our application! In this release, we've introduced a host of new features and enhancements to make your experience even better. Here are some highlights:      "
      
    },
    {
      id:"2",
      date:"2/20/2022",
      content:"hello world"
    }
  ];

  constructor(private service:NotificationserviceService) {
    
    let user_name=localStorage.getItem("userName");
    this.service.get_notification(user_name).subscribe((x) => {
      console.log(x)
      this.notification=x;
      error: (error: HttpErrorResponse) => alert(error.message);
    });

  }

  ngOnInit(): void {}
}
