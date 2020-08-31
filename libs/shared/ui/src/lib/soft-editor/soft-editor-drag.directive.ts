import { Directive, ElementRef, HostListener, Output, EventEmitter, HostBinding, Input, Renderer2, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';


@Directive({
    selector: '[uiSoftEditorDrag]',
})
export class DragDirective implements OnInit {

    @Input('uiSoftEditorDrag') dragData: any;

    @Input() uiSoftEditorDragX: any;


    constructor(
        private readonly renderer: Renderer2,
        private readonly el: ElementRef<HTMLElement>,
    ) {}

    ngOnInit() {
        this.renderer.setProperty(
            this.el.nativeElement,
            'draggable',
            true
        );
        // window, document
        // this.el.nativeElement.setAttribute('draggable', 'true');
    }

    @HostListener('dragstart', ['$event'])
    onDrag(evt: DragEvent) {
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('dragData', this.dragData);
    }
}