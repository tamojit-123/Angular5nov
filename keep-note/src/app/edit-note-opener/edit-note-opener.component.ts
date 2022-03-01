import { Component, OnInit } from '@angular/core';
import {Note} from "../note";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {NotesService} from "../services/notes.service";
import {RouterService} from "../services/router.service";
import {EditNoteViewComponent} from "../edit-note-view/edit-note-view.component";

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent implements OnInit {

  noteId: number=0;
  note!: Note;
  constructor(private activateRoute: ActivatedRoute, public dialog: MatDialog,
              private noteService: NotesService, private router: RouterService) {

  }
  ngOnInit() {
    this.activateRoute.params.subscribe(param => this.noteId = param['noteId']);
    this.noteService.getNoteByNoteId(this.noteId).subscribe((res: Note) => {
      this.note = res;
      this.dialog.open(EditNoteViewComponent, {
        data: this.note
      }).afterClosed().subscribe(result => {
        this.router.routeBack();
      });
    });
  }

}
