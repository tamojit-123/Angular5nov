import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCategoryOpenerComponent } from './edit-category-opener/edit-category-opener.component';
import { EditCategoryViewComponent } from './edit-category-view/edit-category-view.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';
import { EditReminderOpenerComponent } from './edit-reminder-opener/edit-reminder-opener.component';
import { EditReminderViewComponent } from './edit-reminder-view/edit-reminder-view.component';
import { EditUserViewComponent } from './edit-user-view/edit-user-view.component';
import { HeaderComponent } from './header/header.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { ReminderComponent } from './reminder/reminder.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import {NotesService} from "./services/notes.service";
import {AuthenticationService} from "./services/authentication.service";
import {ReminderService} from "./services/reminder.service";
import {CategoryService} from "./services/category.service";
import {RouterService} from "./services/router.service";
import {UserService} from "./services/user.service";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DashboardComponent,
    EditCategoryOpenerComponent,
    EditCategoryViewComponent,
    EditNoteOpenerComponent,
    EditNoteViewComponent,
    EditReminderOpenerComponent,
    EditReminderViewComponent,
    EditUserViewComponent,
    HeaderComponent,
    ListViewComponent,
    LoginComponent,
    NoteComponent,
    NoteTakerComponent,
    NoteViewComponent,
    ReminderComponent,
    SignupComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [NotesService, RouterService, AuthenticationService, ReminderService, CategoryService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [EditNoteViewComponent, EditCategoryViewComponent, EditReminderViewComponent]
})
export class AppModule { }
