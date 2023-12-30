import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationserviceService {

 
  private apiServerUrl = 'http://localhost:8080/api/notification';



  constructor(private http: HttpClient) { }
  public headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };


  public get_notification(user_name:any):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/get_notification/${user_name}`, { headers: this.headers, withCredentials: true });
  }

}
