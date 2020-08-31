"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DragDirective = void 0;
var core_1 = require("@angular/core");
var DragDirective = /** @class */ (function () {
    function DragDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    DragDirective.prototype.ngOnInit = function () {
        this.renderer.setAttribute(this.el, 'draggable', 'true');
        // window, document
        // this.el.nativeElement.setAttribute('draggable', 'true');
    };
    //DragOver listener
    DragDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    };
    DragDirective.prototype.onDrag = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var a = evt.dataTransfer.item = this.dragData;
    };
    __decorate([
        core_1.Input('uiSoftEditorDrag')
    ], DragDirective.prototype, "dragData");
    __decorate([
        core_1.Input()
    ], DragDirective.prototype, "uiSoftEditorDragX");
    __decorate([
        core_1.HostListener('dragover', ['$event'])
    ], DragDirective.prototype, "onDragOver");
    __decorate([
        core_1.HostListener('dragenter', ['$event'])
    ], DragDirective.prototype, "onDrag");
    DragDirective = __decorate([
        core_1.Directive({
            selector: '[uiSoftEditorDrag]'
        })
    ], DragDirective);
    return DragDirective;
}());
exports.DragDirective = DragDirective;
