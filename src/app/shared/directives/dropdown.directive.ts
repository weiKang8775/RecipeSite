import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor (private elementRef: ElementRef) {

  }
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('document:click', ['$event']) toggleDropdown(eventData: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
  }
}