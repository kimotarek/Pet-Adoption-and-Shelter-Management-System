import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private apiUrl = 'http://localhost:8080/auth';

    constructor(private http: HttpClient) { }

    signup(user: any) {
        return this.http.post(this.apiUrl+'/register', user);
    }
    
    login(user:any){
        return this.http.post(this.apiUrl+'/login', user);
    }
}
