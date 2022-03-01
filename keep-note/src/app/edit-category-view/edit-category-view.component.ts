import {Component, Inject, OnInit} from '@angular/core';
import {Category} from "../category";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoryService} from "../services/category.service";
import {RouterService} from "../services/router.service";
import {NotesService} from "../services/notes.service";
import {Noteuser} from "../noteuser";

@Component({
  selector: 'app-edit-category-view',
  templateUrl: './edit-category-view.component.html',
  styleUrls: ['./edit-category-view.component.css']
})
export class EditCategoryViewComponent implements OnInit {

  category!: Category;
  errMessage: string="";

  constructor(private dialog: MatDialogRef<EditCategoryViewComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private categoryService: CategoryService, private routerService: RouterService,
              private noteService: NotesService) {
    this.category = this.data;
  }

  ngOnInit() {
  }

  onSave() {
    this.categoryService.updateCategory(this.category).subscribe((res: any) => {
      this.categoryService.getAllCategoryByUserId();
      this.noteService.fetchNotesFromServer();
      this.noteService.getNotes().subscribe((res: any[]) => {
        let noteuser = new Noteuser();
        res.forEach(note => {
          if (note.category != null && note.category.categoryId === this.category.id) {
            note.category = this.category;
            note.category.categoryId = this.category.id;
          }
        });
        noteuser.notes = res;
        console.log('Inside notes 12333' + JSON.stringify(noteuser));
        this.noteService.addUserNote(noteuser);
      }, (error: { message: string; }) => {
        this.errMessage = error.message;
      });
      this.dialog.close();
    });
  }

}
