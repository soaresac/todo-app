import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[apAppearOnHover]'
})
export class AppearOnHoverDirective {

    constructor(
        private el: ElementRef,
        private render: Renderer2
        ) {}

    @Input() HideElement!: string;

    @HostListener('mouseover')
    appear() {
        let elements = this.el.nativeElement.querySelectorAll(this.HideElement);
        this.render.setStyle(elements[0], 'display', 'inline');
    }

    @HostListener('mouseleave')
    disappear() {
        let elements = this.el.nativeElement.querySelectorAll(this.HideElement);
        this.render.setStyle(elements[0], 'display', 'none');   
    }
 }