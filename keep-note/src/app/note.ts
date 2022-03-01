import { Category } from "./category";
import { Reminder } from "./reminder";

export class Note {
  noteId: Number=0;
  noteTitle: string="";
  noteContent: string="";
  noteStatus: string="";
  noteCreationDate: string="";
  category!: Category;
  reminders!: Reminder[];
  noteCreatedBy: string="";

  constructor() { }

}
