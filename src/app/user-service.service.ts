import { Injectable } from '@angular/core';
import { UserDetails } from './user-registration/user-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

   export class UserServiceService {
    createdUserId: number = 0;
    constructor(private http: HttpClient) { }
  
    public setUserId(createdUserId: number) {
      this.createdUserId = createdUserId;
    }
  
    saveUserProfile(user: UserDetails) {
      return this.http.post("http://localhost:3000/data", user);
    }
  
    getUserProfile(id: number): Observable<UserDetails> {
      return this.http.get<UserDetails>("http://localhost:3000/data/"+id);
    }
  
    updateUserProfile(user: UserDetails, id: number) {
      return this.http.put("http://localhost:3000/data/"+id, user);
    }
  }
