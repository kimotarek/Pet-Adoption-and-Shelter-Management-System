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



  public add_Shelter(Shelter:Shelter):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/addShelter`,Shelter, { withCredentials: true });
  }
  public update_Shelter(Shelter:Shelter):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/updateShelter`,Shelter, { withCredentials: true });
  }
  public delete_Shelter(shelter_id:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/deleteShelter/${shelter_id}`, { withCredentials: true });
  }
  public get_Shelter():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/getShelter`, { withCredentials: true });
  }
  
}
