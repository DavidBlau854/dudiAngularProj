import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements AfterViewInit{

@Input() myInput: string = '';
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {  }

  ngAfterViewInit(): void {
      this.renderer.setStyle(this.elementRef.nativeElement,"background-color", this.myInput)
  }

}
