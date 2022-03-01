import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // initialize array with sample values
  notes: any = [{
    title: "25-Feb-2021",
    content: "Submit Angular assignments by day end today and notify the mentor"
  },
    {
      title: "26-Feb-2021",
      content: "Refactor the solution code and Close the issues raised by mentor on reviewed assignments"
    },
    {
      title: "01-Mar-2021",
      content: "Complete and Submit the observations on the peer review done for JavaScript assignments"
    },
    {
      title: "02-Mar-2021",
      content: "Complete the Practice Assignments on Developing Reusable Angular Components"
    },
    {
      title: "03-Mar-2021",
      content: "Refactor the code basis the peer review done for the Sprint-1 Mastery Challenge"
    },
    {
      title: "04-Mar-2021",
      content: "Complete the reference reading on topics: OOPs with Typescript, Responsiveness with Bootstrap, Asynchronous Programming with Observables, Design Principles : SRP and DRY"
    },
    {
      title: "05-Mar-2021",
      content: "Contribute in conducting quiz with peers"
    },
    {
      title: "06-Mar-2021",
      content: "Provide feedback on the learning sprints completed for HTML, CSS, MediaQueries, Bootstrap, Javascript, DOM Manipulation, AJAX calls"
    }];


  onNoteAdded(note: any) {
    //code to add note to the array
  }


}
