import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    const clickedOnMe = this.elRef.nativeElement.contains(event.target)

    const menuElement = this.elRef.nativeElement.getElementsByClassName('dropdown-menu')[0];
    if (!menuElement) {
      return;
    }
    if (!clickedOnMe) {
      this.renderer.removeClass(menuElement, 'show');
    } else if (this.isOpen){
      this.renderer.removeClass(menuElement, 'show');
    } else {
      this.renderer.addClass(menuElement, 'show');
    }

    this.isOpen =  clickedOnMe ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
