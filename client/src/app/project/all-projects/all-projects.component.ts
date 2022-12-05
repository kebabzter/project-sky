import { IProject } from './../../shared/interfaces/project';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent{

  projects: IProject[] | undefined
  constructor(private projectService: ProjectService) {
    this.getAll()
  }
  
  getAll(){
    this.projects = undefined;
    this.projectService.getAll().subscribe((projects) => this.projects = projects)
  }
}
