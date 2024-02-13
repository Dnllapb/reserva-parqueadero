import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBoldInfo]',
})
export class BoldInfoDirective {
  @Input('appBoldInfo') set boldInfo(value: boolean) {
    const fontWeight = value ? 'bold' : 'normal';
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', fontWeight);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
