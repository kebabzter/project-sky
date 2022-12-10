import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {

  errors: string | undefined = undefined;
  constructor(private projectService: ProjectService, private router:Router) { }

  createProject(form: NgForm){
    this.projectService.createProject(form.value).subscribe({
      next: () => this.router.navigate(['/projects']),
      error: (err) => {
        this.errors = err.error.error
      }
    })
  }
}
