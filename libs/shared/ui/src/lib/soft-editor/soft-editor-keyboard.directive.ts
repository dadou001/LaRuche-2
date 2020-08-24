import { Directive, ElementRef, HostListener } from '@angular/core';
;

@Directive({
    selector: '[uiSoftEditorKeyboard]',
})
export class KeyboardDirective {

    constructor(private el: ElementRef<HTMLElement>) {
        console.log('directive init');
    }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent){
        if (event.key === 'Delete' || event.key === 'Backspace' ){
            const span = this.el.nativeElement.querySelector('span');
            const selection = window.getSelection();
            console.log(selection.focusNode, event.target);

            if (!selection.isCollapsed || !selection.rangeCount) {
                return;
            }

            const curRange = selection.getRangeAt(selection.rangeCount - 1);
            if (curRange.commonAncestorContainer.nodeType === 3 && curRange.startOffset > 0) {
                // we are in child selection. The characters of the text node is being deleted
                return;
            }

            const range = document.createRange();
            if (selection.anchorNode !== this.el.nativeElement) {
                // selection is in character mode. expand it to the whole editable field
                range.selectNodeContents(this.el.nativeElement);
                range.setEndBefore(selection.anchorNode);
            } else if (selection.anchorOffset > 0) {
                range.setEnd(this.el.nativeElement, selection.anchorOffset);
            } else {
                // reached the beginning of editable field
                return;
            }
            range.setStart(this.el.nativeElement, range.endOffset - 1);

            const previousNode = range.cloneContents().lastChild as HTMLElement;
            if (previousNode?.contentEditable === 'false') {
                // this is some rich content, e.g. smile. We should help the user to delete it
                range.deleteContents();
                event.preventDefault();
            }
        }
    }
}