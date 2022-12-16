import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CreateProjectComponent } from './create-project/create-project.component'
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AllProjectsComponent,
    CreateProjectComponent,
    DetailsComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports:[
    AllProjectsComponent
  ]
})
export class ProjectModule { }
