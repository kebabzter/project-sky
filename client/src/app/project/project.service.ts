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
    return this.http.post(`${API_URL}/projects`, data, {withCredentials:true});
  }
  
  getAll(){
    return this.http.get<IProject[]>(`${API_URL}/projects`);
  }

  getById(id: string){
    return this.http.get<IProject>(`${API_URL}/projects/${id}`, {withCredentials:true});
  }

  editProject(id: string| undefined, data: {}){    
    return this.http.put<IProject>(`${API_URL}/projects/${id}`, data);
  }

  deleteProject(id : string | undefined){
    return this.http.delete(`${API_URL}/projects/${id}`);
  }

  getAllByUser(username: string){
    return this.http.get<IProject[]>(`${API_URL}/users/profile/${username}`);
  }
}
