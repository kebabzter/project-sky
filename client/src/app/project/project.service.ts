import { AuthService } from './../auth/auth.service';
import { IProject } from './../shared/interfaces/project';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  createProject(data : {}){
    return this.http.post(`${API_URL}/projects`, data)
  }
  getAll(){
    return this.http.get<IProject[]>(`${API_URL}/projects`)
  }
}
