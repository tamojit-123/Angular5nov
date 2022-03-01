import {Component, Inject, OnInit} from '@angular/core';
import {Category} from "../category";
import {Reminder} from "../reminder";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EditNoteOpenerComponent} from "../edit-note-opener/edit-note-opener.component";
import {NotesService} from "../services/notes.service";
import {ReminderService} from "../services/reminder.service";
import {CategoryService} from "../services/category.service";
import {Note} from "../note";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent implements OnInit {

  note!: Note;
  status: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string="";
  categories!: Category[];
  reminders!: Reminder[];
  checkedReminders: Reminder[];

  constructor(public dialog: MatDialogRef<EditNoteOpenerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NotesService,
              private categoryService: CategoryService, private reminderService: ReminderService,
              private authService: AuthenticationService) {
    this.note = this.data;
    this.checkedReminders = [];
    this.categoryService.getCategoriesForNotes().subscribe((res: Category[]) => {
      this.categories = res;
    });
    this.reminderService.getReminders();
    this.reminderService.getAllReminders().subscribe((res: any[]) => {
      this.reminders = res.filter(reminder => reminder.reminderCreatedBy == this.authService.getUserId());
    })
  }

  ngOnInit() {

  }

  // onSave() {
  //   if (this.checkedReminders != null && this.checkedReminders.length > 0) {
  //     this.note.reminders = this.checkedReminders;
  //   }
  //   else {
  //     this.note.reminders = null;
  //   }
  //   this.noteService.editNote(this.note).subscribe((res: any) => {
  //     this.noteService.getNotes();
  //   }, (error: any) => {
  //     this.errMessage = 'Http failure response for http://localhost:3000/api/v1/notes: 404 Not Found';
  //   });
  //   this.checkedReminders = [];
  //   this.dialog.close();
  // }

  onChange(reminder: Reminder, event: { target: { checked: any; }; }) {
    if (event.target.checked) {
      this.checkedReminders.push(reminder);
    }
    else if (!event.target.checked) {
      console.log('Insides splice');
      const index = this.checkedReminders.findIndex(rem => rem.reminderId === reminder.reminderId);
      this.checkedReminders.splice(index, 1);
    }
    console.log("reminder" +JSON.stringify(this.checkedReminders));
  }
  isChecked(reminder: Reminder) {
    let checked = false;
    if (this.note.reminders != null) {
      const note = this.note.reminders.find(rem => rem.reminderId === reminder.reminderId);
      if (note != null) {
        const rem = this.checkedReminders.find(rem => rem.reminderId === reminder.reminderId);
        if (rem == null) {

          this.checkedReminders.push(reminder);
        }
        checked = true;
      }
    }
    return checked;
  }

}
