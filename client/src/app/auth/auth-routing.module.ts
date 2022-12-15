import { AuthGuard } from './../core/guards/auth.guard';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard],
        data:{
            title: 'Login',
            loginRequired: false,
            'guest': true
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data:{
            title: 'Register',
            loginRequired: false,
            'guest': true
        }
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuard],
        data:{
            title: 'Logout',
            loginRequired: true,
            'guest': false

        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data:{
            title: 'Profile',
            loginRequired: true,
            'guest': false
        }
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  },
  
];

export const AuthRoutingModule = RouterModule.forChild(routes);
