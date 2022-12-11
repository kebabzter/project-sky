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
        data:{
            title: 'Login',
            loginRequired: false
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data:{
            title: 'Register',
            loginRequired: false
        }
      },
      {
        path: 'logout',
        component: LogoutComponent,
        data:{
            title: 'Logout',
            loginRequired: true
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data:{
            title: 'Profile',
            loginRequired: true
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
