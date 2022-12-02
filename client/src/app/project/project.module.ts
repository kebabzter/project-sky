import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { AllProjectsComponent } from './all-projects/all-projects.component';


@NgModule({
  declarations: [
    AllProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  exports:[
    AllProjectsComponent
  ]
})
export class ProjectModule { }
