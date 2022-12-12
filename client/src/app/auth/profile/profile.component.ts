import { IProject } from './../../shared/interfaces/project';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{
  projects: IProject[] | any;
  hasProjects: boolean = false;
  constructor(private authService: AuthService) {
    this.getMyProjects();
   }

   get user(){
    return this.authService.user;
   }

   getMyProjects(){
    this.authService.getProfileProjects().subscribe({
      next: (value) => {
        console.log(value);
        
        if (value.length > 0) {
          this.projects = value;
          this.hasProjects = true;
        }
      },
      error: (err) => console.log(err)
    })
   }
}
