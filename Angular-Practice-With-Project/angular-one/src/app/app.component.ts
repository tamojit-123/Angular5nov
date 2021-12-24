import {Component} from '@angular/core';
import {DatetimeserviceService} from "./datetimeservice.service";
import {LoggerserviceService} from "./loggerservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-app-One';

  parentMessage: string = 'I am a parent component';

  save() {
    alert("hello world!");
  }

  GetChildMessage(data: any) {
    console.log(data);
  }

  constructor(private datetime: DatetimeserviceService, private logger: LoggerserviceService) {

  }

  todayDate: any;
  name: string = '';
  email: string = '';

  showDate() {
    this.todayDate = this.datetime.showTodayDate();
  }

  register() {
    this.logger.logMessage("user registering ....");
    if (this.name == "" || this.email == "") {
      this.logger.logError("user registered failed");
    } else {
      this.logger.logMessage("user successfully registered ....");
    }
    if (this.name == this.name || this.email == "") {
      this.logger.logWarning("email is blank");
    }else {
      this.logger.logMessage("user successfully registered ....");
    }
  }


}
