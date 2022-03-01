import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadComponent} from "./upload/upload.component";
import {LivestreamComponent} from "./livestream/livestream.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./auth.guard";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },

  {
    path: "upload-link",
    component: UploadComponent
  },
  {
    path: "live",
    component: LivestreamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
