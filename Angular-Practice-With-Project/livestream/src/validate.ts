import {AbstractControl} from "@angular/forms";

let startDate: any;
let startTime: any;

export function startDateValid(control: AbstractControl) {
  startDate = control.value;
  let today = new Date();
  startDate = new Date(startDate);
  if (startDate < today) {
    return {inValidStartDate: true};
  } else {
    return null;
  }
}

export function endDateValid(control: AbstractControl) {
  let endDate = control.value;
  endDate = new Date(endDate);
  if (endDate < startDate) {
    return {inValidEndDate: true};
  } else {
    return null;
  }
}
