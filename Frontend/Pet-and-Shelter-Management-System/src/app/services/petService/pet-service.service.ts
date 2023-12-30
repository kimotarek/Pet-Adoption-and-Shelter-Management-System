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
  
  public upload_files(pet_id:any):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/api/pet-documents/upload`, { withCredentials: true });
  }
  public get_all():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`, { withCredentials: true });
  }
  public shelter_pets(shelter_id:any):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/shelterPets/${shelter_id}`, { withCredentials: true });
  }
  
}
