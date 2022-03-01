import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFocusTwo]'
})
// export class FocusTwoDirective {
//
//   @Input('appFocusTwo') color: string = '';
//   @HostBinding('style.backgroundColor')
//   bgColor: string = '';
//
//   @HostListener('focus') onFocus() {
//     this.bgColor = this.color;
//   }
//
//   @HostListener('blur') onBlur() {
//     this.bgColor = "";
//   }
// }

// //using ElementRef for changing style properties
// export class FocusTwoDirective {
//   @Input('appFocus') color: string='';
//
//   constructor(private elementRef : ElementRef) { }
//   @HostListener('focus') onFocus(){
//     this.elementRef.nativeElement.style.backgroundColor = this.color;
//   }
//
//   @HostListener('blur') onBlur(){
//     this.elementRef.nativeElement.style.backgroundColor = null;
//   }
// }
//using Renderer2 for changing style properties
export class FocusTwoDirective {
  @Input('appFocus') color: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.color);

  }

  @HostListener('blur') onBlur() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', null);
  }
}
