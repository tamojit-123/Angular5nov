import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {TemplateformsComponent} from './templateforms/templateforms.component';
import {CustomtemplateComponent} from './customtemplate/customtemplate.component';
import {NameDirective} from './name.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReactiveformsComponent} from './reactiveforms/reactiveforms.component';
import { TestingComponent } from './testing/testing.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './about/create/create.component';
import { DetailsComponent } from './about/details/details.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformsComponent,
    CustomtemplateComponent,
    NameDirective,
    ReactiveformsComponent,
    TestingComponent,
    AboutComponent,
    CreateComponent,
    DetailsComponent,
    LoginComponent,
    OrderComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
