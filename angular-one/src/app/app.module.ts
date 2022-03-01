import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HeroComponent } from './hero/hero.component';
import {FormsModule} from "@angular/forms";
import { DirectiveexComponent } from './directiveex/directiveex.component';
import { AttributeexComponent } from './attributeex/attributeex.component';
import { StudentComponent } from './student/student.component';
import { CheckDirective } from './check.directive';
import { FocusDirective } from './focus.directive';
import { FocusTwoDirective } from './focus-two.directive';
import { RxjsexampleComponent } from './rxjsexample/rxjsexample.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeroComponent,
    DirectiveexComponent,
    AttributeexComponent,
    StudentComponent,
    CheckDirective,
    FocusDirective,
    FocusTwoDirective,
    RxjsexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
