import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerserviceService {

  constructor() {
  }

  logMessage(message: string) {
    console.log(message);
  }

  logError(message: string) {
    console.error(message);
  }

  logWarning(message: string) {
    console.warn(message);
  }
}
