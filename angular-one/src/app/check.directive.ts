import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class CheckDirective {
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  @Input() set appCheck(data: boolean) {
    this.viewContainer.clear();

    if (data) {
      console.log(data);
      //insert the template into container
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
