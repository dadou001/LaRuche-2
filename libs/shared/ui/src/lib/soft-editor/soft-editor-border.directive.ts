import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[uiSoftEditorCard]',
})
export class BorderCardDirective {
    constructor(private el: ElementRef) {
        this.setBorder('#f5f5f5');
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder('#009688');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }
}