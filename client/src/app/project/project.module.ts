import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AllProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    AllProjectsComponent
  ]
})
export class ProjectModule { }
