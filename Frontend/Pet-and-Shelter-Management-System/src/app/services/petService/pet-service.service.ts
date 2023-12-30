import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from 'src/app/objects/pets';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  private apiServerUrl = 'http://localhost:8080/api/pet';
  constructor(private http: HttpClient) { }

  public headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  
  pet_profile:Pets=new Pets();
  public add_pet(pet:Pets):Observable<any>{
  
    return this.http.post<any>(`${this.apiServerUrl}/add`,pet, {headers: this.headers,withCredentials: true });
  }
  public update_pet(pet:Pets):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/update`,pet, {headers: this.headers, withCredentials: true });
  }
  public delete_pet(pet_id:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/delete/${pet_id}`, { headers: this.headers, withCredentials: true });
  }
  
  public upload_files():Observable<any>{
    return this.http.post<any>(`http://localhost:8080/api/pet-documents/upload`, {headers: this.headers, withCredentials: true });
  }
  public get_all():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`, { headers: this.headers,withCredentials: true });
  }
  public shelter_pets(shelter_id:any):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/shelterPets/${shelter_id}`, {headers: this.headers, withCredentials: true });
  }
  
  
  public get_pet_profile(pet_id:any):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/get_pet_profile/${pet_id}`, { headers: this.headers, withCredentials: true });
  }

  public searchPets(searchValue: string, searchCriteria: string): Observable<any> {
    // const params = new HttpParams()
    //   .set('searchValue', searchValue)
    //   .set('searchCriteria', searchCriteria);
  
    return this.http.get<any>(`${this.apiServerUrl}/searchPets/${searchCriteria}/${searchValue}`, {  headers: this.headers, withCredentials: true });
  }

}
