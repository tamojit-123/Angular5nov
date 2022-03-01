import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../note";
import {RouterService} from "../services/router.service";
import {NotesService} from "../services/notes.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note!: Note;
  constructor(private router: RouterService, private noteService: NotesService) {
  }

  ngOnInit() {

  }

  openEditNoteView() {
    this.router.routeToEditNoteView(this.note.noteId);
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.noteId).subscribe((response: any) => {
      this.noteService.fetchNotesFromServer();
    })
  }

  openNoteReminderView(){
    this.router.routeToAddReminderView(this.note.noteId);
  }

}
