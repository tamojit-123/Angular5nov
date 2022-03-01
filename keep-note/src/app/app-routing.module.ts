import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NoteViewComponent} from "./note-view/note-view.component";
import {ListViewComponent} from "./list-view/list-view.component";
import {EditNoteOpenerComponent} from "./edit-note-opener/edit-note-opener.component";
import {CategoryComponent} from "./category/category.component";
import {EditCategoryOpenerComponent} from "./edit-category-opener/edit-category-opener.component";
import {ReminderComponent} from "./reminder/reminder.component";
import {EditReminderOpenerComponent} from "./edit-reminder-opener/edit-reminder-opener.component";
import {EditUserViewComponent} from "./edit-user-view/edit-user-view.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'view/noteview',
        component: NoteViewComponent
      },
      {
        path: 'view/listview',
        component: ListViewComponent
      },
      {
        path: 'note/:noteId/edit',
        component: EditNoteOpenerComponent,
        outlet: 'noteEditOutlet'
      },
      {
        path: '',
        redirectTo: 'view/noteview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'category',
    component: CategoryComponent,
    children: [{
      path: 'category/:categoryId/edit',
      component: EditCategoryOpenerComponent,
      outlet: 'categoryEditOutlet'
    },
    {
      path: 'view/noteview/:categoryId',
      component: NoteViewComponent,
      runGuardsAndResolvers: 'always',
    },
    {
      path: 'view/listview/:categoryId',
      component: ListViewComponent,
      runGuardsAndResolvers: 'always',
    }]
  },
  {
    path: 'reminder',
    component: ReminderComponent,
    children: [{
      path: 'reminder/:reminderId/edit',
      component: EditReminderOpenerComponent,
      outlet: 'reminderEditOutlet'
    },
    {
      path: 'view/noteview/:reminderId',
      component: NoteViewComponent,
      runGuardsAndResolvers: 'always',
    },
    {
      path: 'view/listview/:reminderId',
      component: ListViewComponent,
      runGuardsAndResolvers: 'always',
    }]
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/edit/:userId',
    component: EditUserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
