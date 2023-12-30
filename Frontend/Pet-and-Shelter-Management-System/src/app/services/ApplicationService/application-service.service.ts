import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/objects/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  private apiServerUrl = 'http://localhost:8080/api/app';


  constructor(private http: HttpClient) { }

  public headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  public add_pet(pet_id:any,adopterUserName:any):Observable<any>{
    let app:Application = new Application();
    app.status = "pending";
    app.petId = 2;
    app.adopterUserName = "ibrahim";
    return this.http.post<any>(`${this.apiServerUrl}/add`,app, { headers: this.headers,withCredentials: true });
  }
  public get_apps(staff_name:any):Observable<any>{
   return this.http.get<any>(`${this.apiServerUrl}/getApps/${staff_name}`, { headers: this.headers, withCredentials: true });
 }

  public response_app(reply:any,idOfApp:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/replyToApp/${reply}/${idOfApp}`, { headers: this.headers,withCredentials: true });
  }

  }
