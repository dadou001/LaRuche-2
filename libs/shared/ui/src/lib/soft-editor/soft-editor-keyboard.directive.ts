import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
;

@Directive({
    selector: '[uiSoftEditorKeyboard]',
})
export class KeyboardDirective {

    constructor(private el: ElementRef) {

    }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent){
        if (event.key === 'Delete' || event.key === 'Backspace' ){
            const span = this.el.nativeElement.querySelector('span');
            span.remove();
        }
    }
}