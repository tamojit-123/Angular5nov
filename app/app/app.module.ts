import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HeroComponent } from './hero/hero.component';
import { Hero1Component } from './hero1/hero1.component';
import { FormsModule } from '@angular/forms';
import { DirectiveexComponent } from './directiveex/directiveex.component';
import { AtrdirComponent } from './atrdir/atrdir.component';
import { CheckDirective } from './check.directive';
import { FocusDirective } from './focus.directive';
import { RxjxexComponent } from './rxjxex/rxjxex.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeroComponent,
    Hero1Component,
    DirectiveexComponent,
    AtrdirComponent,
    CheckDirective,
    FocusDirective,
    RxjxexComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
