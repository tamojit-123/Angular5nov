import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {
  constructor() {
  }

  @Input('appFocus') color: string = '';
  @HostBinding('style.backgroundColor')
  bgColor: string = '';

  @HostListener('focus') onFocus() {
    this.bgColor = this.color;
  }

  @HostListener('blur') onBlur() {
    this.bgColor = "";
  }

}
