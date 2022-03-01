import {AbstractControl} from "@angular/forms";

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https://')) {
    return {invalidUrl: true}
  }
  return null;
}
