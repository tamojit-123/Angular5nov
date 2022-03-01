import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appUrl]',
  providers:[{provide: NG_VALIDATORS, useExisting: UrlDirective, multi: true}]
})
export class UrlDirective {
  validator:ValidatorFn;
  constructor() {
    this.validator=validateURL();
  }

}
function validateURL():ValidatorFn{
  return (control:AbstractControl)=>{
    let urlCheck=control.value.startWith('https://');
    if(urlCheck){
      return null;
    }
    else{
      return{
        pattern:{
          valid:false
        }
      }

    }
  }
}
