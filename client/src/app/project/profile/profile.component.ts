import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  projects: IProject[] | undefined;
  username: string | undefined;
  hasProjects: boolean = false;

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute) {
    this.getProjects();
   }

  getProjects(): void {
    this.projects = undefined;
    const username = this.activatedRoute.snapshot.params['id'];
    console.log(username);
    
    this.username = username
    this.projectService.getAllByUser(username).subscribe({
      next: (value) => {
        if (value.length > 0) {
          this.projects = value;
          this.hasProjects = true;
        }
      },
      error: (err) => console.log(err)
    })
  }
}
