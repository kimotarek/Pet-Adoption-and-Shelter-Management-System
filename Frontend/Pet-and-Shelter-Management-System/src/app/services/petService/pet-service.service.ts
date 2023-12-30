import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from 'src/app/objects/pets';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  private apiServerUrl = 'http://localhost:8080/api/pet';


  constructor(private http: HttpClient) { }



  public add_pet(pet:Pets):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/add`,pet, { withCredentials: true });
  }
  public update_pet(pet:Pets):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/update`,pet, { withCredentials: true });
  }
  public delete_pet(pet_id:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/delete/${pet_id}`, { withCredentials: true });
  }
  
  
}
