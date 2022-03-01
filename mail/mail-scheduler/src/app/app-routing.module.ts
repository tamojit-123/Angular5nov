import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountGuard} from './account.guard';
import {BodyComponent} from './body/body.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent,
    children:
      [
        {
          path: "login",
          component: LoginComponent
        },
        {
          path: "register",
          component: RegisterComponent
        }
      ]
  },
  {
    path: "body",
    canActivate: [AccountGuard],
    component: BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
