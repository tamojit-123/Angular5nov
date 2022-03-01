import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CreateComponent} from "./about/create/create.component";
import {DetailsComponent} from "./about/details/details.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {OrderComponent} from "./order/order.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "About",
    children: [
      {
        path: "",
        component: AboutComponent
      },
      {
        path: "Create",
        component: CreateComponent
      },
      {
        path: "Details",
        component: DetailsComponent
      },
    ]

  },
  {
    path: "Login",
    component: LoginComponent
  },
  {
    path: "Order",
    canActivate: [AuthGuard],
    component: OrderComponent
  },
  {
    path: "Contact",
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
