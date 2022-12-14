import { DetailsComponent } from './details/details.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../auth/error/error.component';

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
      },
      {
        path: ':id',
        component: DetailsComponent
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
