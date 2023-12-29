import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { speciebreed } from 'src/app/objects/speciebreed';

@Injectable({
  providedIn: 'root'
})
export class BreedServiceService {


  private apiServerUrl = 'http://localhost:8080/api/Breed';



  constructor(private http: HttpClient) { }



  public add_Breed(breed:speciebreed):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/addBreed`,breed, { withCredentials: true });
  }
  public update_Breed(breed:speciebreed):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/updateBreed`,breed, { withCredentials: true });
  }
  public delete_Breed(Breed:string):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/deleteBreed/${Breed}`, { withCredentials: true });
  }
  public get_Breed():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/getBreed`, { withCredentials: true });
  }
  }
