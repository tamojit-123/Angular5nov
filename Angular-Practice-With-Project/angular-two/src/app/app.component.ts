import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
