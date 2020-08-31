import { Directive, ElementRef, HostListener, Output, EventEmitter, HostBinding, Renderer2, OnDestroy } from '@angular/core';


@Directive({
    selector: '[uiSoftEditorDrop]',
})
export class DropDirective implements OnDestroy {
    private readonly listeners: (() => void)[] = [];

    @Output() dropItem = new EventEmitter<any>();

    constructor(
        private readonly renderer: Renderer2,
        private readonly el: ElementRef<HTMLElement>
    ) {}

    ngOnDestroy() {
        this.listeners.forEach(unlisten => unlisten());
    }

    @HostListener('dragover', ['$event'])
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }

    @HostListener('dropover', ['$event']) onDropOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log('drop over');
    }

    @HostListener('drop', ['$event'])
    public ondrop(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();

        const id = evt.dataTransfer.getData('dragData');
        if (id) {
            const span = this.renderer.createElement('span');

            this.renderer.setProperty(
                span,
                'id',
                id
            );

            this.renderer.setProperty(
                span,
                'innerHTML',
                id
            );

            this.renderer.setProperty(
                span,
                'classList',
                'var-embed'
            );

            this.renderer.setProperty(
                span,
                'contentEditable',
                false
            );

            this.renderer.appendChild(
                this.el.nativeElement,
                span
            );

            /*
            this.renderer.insertBefore(
                this.el.nativeElement,
                span, // new,
                null, // ref.nextSibling
            )
            */

            this.listeners.push(
                this.renderer.listen(
                    span,
                    'click',
                    () => {
                       // alert('click' + id);
                        document.dispatchEvent(
                            new CustomEvent('focusFragment', {
                                detail: { id }
                            })
                        );
                    }
                )
            );
        }
    }

}