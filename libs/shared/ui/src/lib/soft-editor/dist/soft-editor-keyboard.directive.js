"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.KeyboardDirective = void 0;
var core_1 = require("@angular/core");
var KeyboardDirective = /** @class */ (function () {
    function KeyboardDirective(el) {
        this.el = el;
    }
    KeyboardDirective.prototype.onKeyDown = function (event) {
        if (event.key === 'Delete' || event.key === 'Backspace') {
            var span = this.el.nativeElement.querySelector('span');
            var selection = window.getSelection();
            if (!selection.isCollapsed || !selection.rangeCount) {
                return;
            }
            var curRange = selection.getRangeAt(selection.rangeCount - 1);
            if (curRange.commonAncestorContainer.nodeType === 3 && curRange.startOffset > 0) {
                // we are in child selection. The characters of the text node is being deleted
                return;
            }
            var range = document.createRange();
            if (selection.anchorNode !== this.el.nativeElement) {
                // selection is in character mode. expand it to the whole editable field
                range.selectNodeContents(this.el.nativeElement);
                range.setEndBefore(selection.anchorNode);
            }
            else if (selection.anchorOffset > 0) {
                range.setEnd(this.el.nativeElement, selection.anchorOffset);
            }
            else {
                // reached the beginning of editable field
                return;
            }
            range.setStart(this.el.nativeElement, range.endOffset - 1);
            var previousNode = range.cloneContents().lastChild;
            if (previousNode && previousNode.contentEditable === 'false') {
                // this is some rich content, e.g. smile. We should help the user to delete it
                range.deleteContents();
                event.preventDefault();
                // REFERENCE TO THE DELETED EMBED
                console.log(previousNode);
            }
        }
    };
    __decorate([
        core_1.HostListener('keydown', ['$event'])
    ], KeyboardDirective.prototype, "onKeyDown");
    KeyboardDirective = __decorate([
        core_1.Directive({
            selector: '[uiSoftEditorKeyboard]'
        })
    ], KeyboardDirective);
    return KeyboardDirective;
}());
exports.KeyboardDirective = KeyboardDirective;
