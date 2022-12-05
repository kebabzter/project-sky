import { CreateProjectComponent } from './create-project/create-project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AllProjectsComponent
      },
      {
        path: 'create',
        component: CreateProjectComponent
      }
      // {
      //   path: ':id',
      //   component: 
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
