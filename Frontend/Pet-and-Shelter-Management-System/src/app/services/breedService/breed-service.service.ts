import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { speciebreed } from 'src/app/objects/speciebreed';

@Injectable({
  providedIn: 'root'
})
export class BreedServiceService {


  private apiServerUrl = 'http://localhost:8080/api/Breed';

  public headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  constructor(private http: HttpClient) { }



  public add_Breed(breed:speciebreed):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/addBreed`,breed, { headers: this.headers, withCredentials: true });
  }
  public update_Breed(breed:speciebreed):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/updateBreed`,breed, {  headers: this.headers,withCredentials: true });
  }
  public delete_Breed(Breed:string):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/deleteBreed/${Breed}`, { headers: this.headers, withCredentials: true });
  }
  public get_Breed():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/getBreed`, { headers: this.headers, withCredentials: true });
  }
  }
