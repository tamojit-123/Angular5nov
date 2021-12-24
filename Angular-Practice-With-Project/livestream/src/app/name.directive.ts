import {Directive} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[appName]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameDirective, multi: true}]
})
export class NameDirective implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = validateName();
  }

  //predefined
  validate(c: FormControl) {
    return this.validator(c);//null with firstname text box
  }
}

function validateName(): ValidatorFn {
  return (c: AbstractControl) => {
    let isValid = c.value === 'NIIT';
    if (isValid) {
      return null;
    } else {
      return {
        name: {
          valid: false
        }
      }
    }
  }
}
