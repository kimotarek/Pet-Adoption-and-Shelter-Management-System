import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shelter } from 'src/app/objects/shelters';

@Injectable({
  providedIn: 'root'
})
export class ShelterserviceService {

  private apiServerUrl = 'http://localhost:8080/api/shelter';



  constructor(private http: HttpClient) { }

  public headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };


  public add_Shelter(Shelter:Shelter):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/addShelter`,Shelter, { headers: this.headers, withCredentials: true });
  }
  public update_Shelter(Shelter:Shelter):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/updateShelter`,Shelter, {  headers: this.headers,withCredentials: true });
  }
  public delete_Shelter(shelter_id:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/deleteShelter/${shelter_id}`, { headers: this.headers, withCredentials: true });
  }
  public get_Shelter():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/getShelter`, { withCredentials: true });
  }
  public getShelteridbyusername(staffUserName:any):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/name/${staffUserName}`, {headers: this.headers, withCredentials: true });
  }
  
}
