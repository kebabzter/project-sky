import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get isLoggedIn(){
    return this.user !== null;
  }

  constructor(private http: HttpClient) { }

  login(data: {}){
    return this.http.post<IUser>(`${API_URL}/users/login`, data).pipe(
      tap((user) => {
        this.user = user;
        localStorage.setItem('token', this.user.accessToken)
      })
    )
  }

  register(data: {}){
    return this.http.post<IUser>(`${API_URL}/users/register`, data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem('token', this.user.accessToken)
      })
    )
  }

  getProfileData(){
    return this.http.get<IUser>(`${API_URL}/auth`).pipe(
      tap((user) => {
        this.user = user;
      })
    )
  }

  logout(){
    this.user = null;
    return localStorage.removeItem('token')
  }
}
